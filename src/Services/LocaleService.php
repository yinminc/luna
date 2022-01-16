<?php

/**
 * Part of earth project.
 *
 * @copyright  Copyright (C) 2022 __ORGANIZATION__.
 * @license    __LICENSE__
 */

declare(strict_types=1);

namespace Lyrasoft\Luna\Services;

use Lyrasoft\Luna\Entity\Language;
use Lyrasoft\Luna\Script\LunaScript;
use Psr\Http\Message\UriInterface;
use Windwalker\Core\Application\AppContext;
use Windwalker\Core\Language\LangService;
use Windwalker\Core\Router\Navigator;
use Windwalker\Data\Collection;
use Windwalker\Language\LanguageNormalizer;
use Windwalker\ORM\ORM;
use Windwalker\Uri\Uri;
use Windwalker\Utilities\Cache\InstanceCacheTrait;

/**
 * The LocaleService class.
 */
class LocaleService
{
    use InstanceCacheTrait;

    public const FLAG_NORMAL = 1;

    public const FLAG_SQUARE = 2;

    public const STAGE_FRONT = 1 << 0;

    public const STAGE_ADMIN = 1 << 1;

    public const STAGE_CURRENT = 1 << 2;

    public const STAGE_EITHER = 0;

    public const STAGE_BOTH = self::STAGE_FRONT | self::STAGE_ADMIN;

    public function __construct(
        protected AppContext $app,
        protected ORM $orm,
        protected Navigator $nav,
        protected LangService $langService,
        protected LunaScript $lunaScript,
    ) {
    }

    public function isEnabled(): bool
    {
        return (bool) $this->app->config('luna.i18n.enabled');
    }

    public function isStageEnabled(?string $stage = null): bool
    {
        $stage ??= $this->app->getStage();

        return (bool) $this->app->config('luna.i18n.' . $stage . '.enabled');
    }

    /**
     * getAvailableLanguages
     *
     * @return  Language[]|Collection
     */
    public function getAvailableLanguages(): Collection
    {
        return $this->once(
            'languages',
            function () {
                return $this->orm->from(Language::class)
                    ->where('language.state', 1)
                    ->order('language.ordering', 'ASC')
                    ->all(Language::class)
                    ->mapWithKeys(fn(Language $language) => [$language->getAlias() => $language]);
            }
        );
    }

    /**
     * getLanguageByCode
     *
     * @param  string  $code
     *
     * @return  ?Language
     */
    public function getLanguageByAlias(string $code): ?Language
    {
        return $this->getAvailableLanguages()[$code] ?? null;
    }

    /**
     * getLanguageByCode
     *
     * @param  int  $id
     *
     * @return  ?Language
     */
    public function getLanguageById(int $id): ?Language
    {
        foreach ($this->getAvailableLanguages() as $language) {
            if ($language->getId() === $id) {
                return $language;
            }
        }

        return null;
    }

    /**
     * getLanguage
     *
     * @return string|null
     */
    public function getCurrentLanguageCode(): ?string
    {
        return $this->getCurrentLanguage()?->getCode();
    }

    /**
     * getLanguage
     *
     * @return  ?Language
     */
    public function getCurrentLanguage(): ?Language
    {
        return $this->getAvailableLanguages()
            ->findFirst(fn (Language $lang) => $lang->getCode() === $this->getLocale());
    }

    /**
     * getLocale
     *
     * @return  string
     */
    public function getLocale(): string
    {
        return $this->langService->getLocale();
    }

    /**
     * setLanguage
     *
     * @param  string  $code
     *
     * @return  void
     */
    public function setLocale(string $code): void
    {
        $this->langService->setLocale($code);
        $this->app->config->setDeep('language.locale', $code);
    }

    public function getBrowserLanguage(?array $available = null, string $default = 'en-US'): string
    {
        $available ??= $this->getAvailableLanguages()
            ->map(fn(Language $language) => $language->getCode())
            ->dump();

        $accept = $this->app->getServerRequest()->getServerParams()['HTTP_ACCEPT_LANGUAGE'] ?? null;

        if ($accept) {
            $langs = explode(',', $accept);

            if (empty($available)) {
                return $langs[0];
            }

            foreach ($langs as $lang) {
                [$lang] = explode(';', $lang);
                $lang = static::formatLangCode($lang);

                if (in_array($lang, $available, true)) {
                    return $lang;
                }
            }
        }

        return $default;
    }

    public function getRouteWithoutCode(): UriInterface
    {
        $originRoute = ltrim($this->app->state('origin_route'), '/');
        $originRoute = new Uri($originRoute);

        $query = $this->app->getAppRequest()->getQueryValues();

        return $originRoute->withQueryParams($query);
    }

    public function getFlagIconClass(string $name, int $type = self::FLAG_NORMAL): string
    {
        $this->lunaScript->flagIcon();

        $name = trim(LanguageNormalizer::normalizeLangCode($name), '-');

        $names = explode('-', $name, 2);

        if (isset($names[1])) {
            $names[0] = $names[1];
        }

        $sq = $type === static::FLAG_SQUARE ? ' flag-icon-squared' : null;

        return 'flag-icon flag-icon-' . $names[0] . $sq;
    }

    public static function formatLangCode(string $code): string
    {
        if (!str_contains($code, '-') && !str_contains($code, '_')) {
            return $code;
        }

        if (str_contains($code, '_')) {
            $sep = '_';
        } else {
            $sep = '-';
        }

        [$first, $second] = explode($sep, $code, 2);

        return $first . $sep . strtoupper($second);
    }

    public static function getSeederLangCodes(ORM $orm): array
    {
        $langCodes = $orm->findColumn(Language::class, 'code', ['state' => 1])->dump();
        $langCodes[] = '*';

        return $langCodes;
    }
}
