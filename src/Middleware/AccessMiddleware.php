<?php

/**
 * Part of simplemart project.
 *
 * @copyright  Copyright (C) 2021 __ORGANIZATION__.
 * @license    MIT
 */

declare(strict_types=1);

namespace Lyrasoft\Luna\Middleware;

use Lyrasoft\Luna\Access\AccessService;
use Lyrasoft\Luna\User\UserService;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Message\UriInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Windwalker\Core\Application\ApplicationInterface;
use Windwalker\Core\Security\Exception\UnauthorizedException;
use Windwalker\Utilities\Options\OptionsResolverTrait;

/**
 * The AccessMiddleware class.
 */
class AccessMiddleware implements MiddlewareInterface
{
    use OptionsResolverTrait;

    public function __construct(
        protected ApplicationInterface $app,
        protected \Closure|string|array $rules,
        array $options = []
    ) {
        $this->resolveOptions(
            $options,
            function (OptionsResolver $resolver) {
                $resolver->define('exception')
                    ->allowedTypes('string', 'closure')
                    ->default(UnauthorizedException::class);

                $resolver->define('error_code')
                    ->allowedTypes('int')
                    ->default(403);
            }
        );
    }

    public function process(ServerRequestInterface $request, RequestHandlerInterface $handler): ResponseInterface
    {
        $allow = true;
        $userService = $this->app->service(UserService::class);

        if ($this->rules instanceof \Closure) {
            $result = $this->app->call($this->rules);

            if ($result === false) {
                $this->raiseError();
            }

            if ($result instanceof UriInterface || $result instanceof ResponseInterface) {
                return $result;
            }
        }

        $rules = (array) $this->rules;

        foreach ($rules as $rule) {
            $allow = $allow && $userService->can($rule);
        }

        if (!$allow) {
            $this->raiseError();
        }

        return $handler->handle($request);
    }

    protected function raiseError(): void
    {
        $exception = $this->options['exception'];

        if ($exception instanceof \Closure) {
            $this->app->call($exception);
            return;
        }

        throw new $exception('Access denied', $this->options['error_code']);
    }
}
