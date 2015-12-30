import React, { PropTypes, Component } from 'react';
import Inline from './Inline.jsx';
import { CSS_PREFIX, CLASS_NAMES } from '../../../constants/GridConstants';
import { keyGenerator, keyFromObject } from '../../../util/keygenerator';
import { setSelection } from '../../../actions/plugins/selection/ModelActions';

export default class Manager {

	constructor(plugins, store, events) {

		const defaults = {
			type: 'inline',
			enabled: false
		};

		const editModes = {
			inline: 'inline'
		};

		const config = plugins.EDITOR 
			? Object.assign(defaults, plugins.EDITOR) : defaults;

		this.config = config;
		this.editModes = editModes;
		
	}

	getComponent(plugins, store, events, selectionModel, editor, columns) {

		const editorProps = {
			columns
		};

		if (!this.config.enabled) {
			return null;
		}

		else if (this.config.type === this.editModes.inline) {
			return <Inline { ...editorProps} />
		} 
		
		else {
			return null;
		}
	}

}