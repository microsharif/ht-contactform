//Import CSS.
import './editor.scss';
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './Edit';
import Attributes from './block.json';
import icon from './icon';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { Icon } from '@wordpress/components';


registerBlockType( 'block/ht-contactform', {
	title: __( 'HT Contact Form 7' ), 
	icon: <Icon icon={ icon } />,
	category: 'common',
	keywords: [
		__( 'ht-contactform' ),
		__( 'contact-form' ),
	],
	supports: {
		align: ['wide','full']
	},
	attributes:Attributes,
	edit: Edit,
	save: ( props ) => {
		return null;
	},
} );
