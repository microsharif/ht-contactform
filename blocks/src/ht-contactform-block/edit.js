/**
 * Internal dependencies
 */
import Inspector from './inspector';

/**
 * WordPress dependencies
 */
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { Fragment, Component } from '@wordpress/element';
const { serverSideRender: ServerSideRender } = wp;

class Edit extends Component {

	render (){
		const{
			clientId,
			attributes,
			className,
			setAttributes,
		} = this.props;

		const { formId, blockUniqId } = attributes;

		{ ( blockUniqId == '' ) && setAttributes( { blockUniqId: clientId } ) }

		const areaClasses = classnames( 
			className,
			{ [ `ht-contactform-area-${ attributes.align }` ] : attributes.align }
		);

		let htBlockUniqId = `ht-editor-bock-${blockUniqId}`;

		return (
			<Fragment>
				<div id={ htBlockUniqId } className={ areaClasses }>
					<ServerSideRender
						block="block/ht-contactform"
						attributes = {{formId:formId}}
					/>
				</div>
	     		<Inspector { ...this.props } />
		    </Fragment>
		);
	}
}

export default Edit;
