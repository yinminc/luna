<?php
/**
 * Part of earth project.
 *
 * @copyright  Copyright (C) 2016 {ORGANIZATION}. All rights reserved.
 * @license    GNU General Public License version 2 or later.
 */

namespace Lyrasoft\Luna\Module;

use Windwalker\Core\Renderer\BladeRenderer;
use Windwalker\Data\Data;

/**
 * The ModuleType class.
 *
 * @property-read  string  type
 * @property-read  string  name
 * @property-read  string  description
 * @property-read  string  icon
 * @property-read  string  class
 * @property-read  string  langPrefix
 *
 * @since  {DEPLOY_VERSION}
 */
class ModuleType extends Data
{
	/**
	 * createInstance
	 *
	 * @param   array          $data
	 * @param   BladeRenderer  $renderer
	 *
	 * @return  AbstractModule
	 */
	public function createInstance($data = array(), BladeRenderer $renderer = null)
	{
		$class = $this->class;

		return new $class($data, $renderer);
	}
}