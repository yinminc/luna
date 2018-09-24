<?php
/**
 * Part of earth project.
 *
 * @copyright  Copyright (C) 2018 ${ORGANIZATION}.
 * @license    __LICENSE__
 */

namespace Lyrasoft\Luna\PageBuilder\Button;

use Lyrasoft\Luna\PageBuilder\AbstractAddon;
use Lyrasoft\Luna\PageBuilder\HasOwnStyleInterface;
use Lyrasoft\Luna\PageBuilder\Renderer\Style\StyleContainer;
use Windwalker\Core\Asset\AssetManager;
use Windwalker\Data\DataInterface;
use Windwalker\Structure\Structure;

/**
 * The ButtonAddon class.
 *
 * @since  __DEPLOY_VERSION__
 */
class ButtonAddon extends AbstractAddon implements HasOwnStyleInterface
{
    /**
     * Property type.
     *
     * @var  string
     */
    protected static $type = 'button';

    /**
     * Property icon.
     *
     * @var  string
     */
    protected static $icon = 'fa fa-toggle-off';

    /**
     * prepareData
     *
     * @param DataInterface $data
     *
     * @return  void
     */
    protected function prepareData(DataInterface $data)
    {
    }

    /**
     * loadVueComponent
     *
     * @param AssetManager $asset
     *
     * @return  void
     *
     * @since  __DEPLOY_VERSION__
     */
    public static function loadVueComponent(AssetManager $asset)
    {
    }

    /**
     * prepareCSS
     *
     * @param Structure      $options
     * @param StyleContainer $styles
     *
     * @return  void
     *
     * @since  __DEPLOY_VERSION__
     */
    public function prepareCSS(Structure $options, StyleContainer $styles)
    {
        $styles->select('.c-button')
            ->add('border-radius', $options['border_radius'], 'px');
    }

    /**
     * prepareElement
     *
     * @param Structure $options
     * @param array     $classes
     * @param array     $attrs
     *
     * @return  void
     *
     * @since  __DEPLOY_VERSION__
     */
    public function prepareElement(Structure $options, array &$classes, array &$attrs)
    {
    }
}
