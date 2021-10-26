/**
 * WordPress dependencies
 */
 import { __ } from '@wordpress/i18n';
 import { Fragment } from '@wordpress/element';
 import { PanelRow, Button, ButtonGroup, __experimentalNumberControl as NumberControl } from '@wordpress/components';
 
 /**
  * DimensionsControl controls
  */
 const DimensionsControl = ( props ) => {
        
        const {
			setAttributes,
            lavel,
            dimensions,
            device,
            attributesKey,
        } = props;

        const onChangeData = ( newValue, dataKey ) => {
			const newDimensions = { ...dimensions };

            if( props.responsive &&  props.device){

                let linkAll = dimensions.link ? dimensions.link : 'yes';

                if( linkAll === 'yes' ){
                    newDimensions[device] = {
                        top : newValue,
                        right : newValue,
                        bottom : newValue,
                        left : newValue,
                    };
                    newDimensions.link = 'yes';
                    newDimensions.unit = dimensions.unit ? dimensions.unit : 'px';
                }else{
                    newDimensions[device] = {
                        top : newDimensions[device].top !== '' ? newDimensions[device].top : '0',
                        right : newDimensions[device].right !== '' ? newDimensions[device].right : '0',
                        bottom : newDimensions[device].bottom !== '' ? newDimensions[device].bottom : '0',
                        left : newDimensions[device].left !== '' ? newDimensions[device].left : '0',
                        link : 'no',
                        unit: newDimensions[device].unit !== '' ? newDimensions[device].unit : 'px',
                        [dataKey] : newValue,
                    };
                    newDimensions.link = 'no';
                    newDimensions.unit = dimensions.unit !== '' ? dimensions.unit : 'px';
                }
                console.log(newDimensions);
            }else{
                if( newDimensions.link === 'yes' ){
                    newDimensions.top = newValue;
                    newDimensions.right = newValue;
                    newDimensions.bottom = newValue;
                    newDimensions.left = newValue;
                    newDimensions.link = 'yes';
                }else{
                    newDimensions.top = newDimensions.top !== '' ? newDimensions.top : '0';
                    newDimensions.right = newDimensions.right !== '' ? newDimensions.right : '0';
                    newDimensions.bottom = newDimensions.bottom !== '' ? newDimensions.bottom : '0';
                    newDimensions.left = newDimensions.left !== '' ? newDimensions.left : '0';
                    newDimensions.link = 'no';
                    newDimensions[dataKey] = newValue;
                }
            }

			setAttributes( { [ attributesKey ]: newDimensions } );
            
		};

        const onClickUnit = ( event ) => {
            const newDimensions = { ...dimensions };
			newDimensions.unit = event.target.value;
			setAttributes( { [ attributesKey ]: newDimensions } );
        };

        const setLinkAllHandler = () => {
            const newDimensions = { ...dimensions };
            if( newDimensions.link === 'yes' ){
                newDimensions.link = 'no';
            }else{
                newDimensions.link = 'yes';
            }
            setAttributes( { [ attributesKey ]: newDimensions } );
        };
 
        return (
            <Fragment>
 
                <div className="wp-block-selector-ht-contactform-dimensions-control">
                    
                    <PanelRow className={'ht-contactform-panel-row-height-auto'} style={{ minHeight: 'auto' }}>
                        <h3>{ lavel }</h3>
                        <ButtonGroup className="ht-contactform-dimensions-btn-group">
                            <Button
                                value= 'px'
                                text = { __('PX', 'ht-contactform') }
                                isPrimary= { (dimensions.unit === 'px') }
                                isSecondary= { dimensions.unit !== 'px' }
                                onClick={ onClickUnit }
                                title= { __('PX', 'ht-contactform') }
                                focus={false}
                            />
                            <Button
                                value= '%'
                                text = { __('%', 'ht-contactform') }
                                isPrimary= { (dimensions.unit === '%') }
                                isSecondary= { dimensions.unit !== '%' }
                                onClick={ onClickUnit }
                                title= { __('%', 'ht-contactform') }
                                focus={false}
                            />
                            <Button
                                value= 'em'
                                text = { __('EM', 'ht-contactform') }
                                isPrimary= { (dimensions.unit === 'em') }
                                isSecondary= { dimensions.unit !== 'em' }
                                onClick={ onClickUnit }
                                title= { __('EM', 'ht-contactform') }
                                focus={false}
                            />
                        </ButtonGroup>
                    </PanelRow>

                    <PanelRow>
                        <NumberControl
                            label={ __( 'Top','ht-contactform' ) }
                            isShiftStepEnabled={ true }
                            onChange={ ( newValue ) => onChangeData( newValue, 'top' ) }
                            shiftStep={ 10 }
                            value={ props.responsive && props.device ? dimensions[device].top : dimensions.top }
                            labelPosition={'bottom'}
                        />
                        <NumberControl
                            label={ __( 'Right','ht-contactform' ) }
                            isShiftStepEnabled={ true }
                            onChange={ ( newValue ) => onChangeData( newValue, 'right' ) }
                            shiftStep={ 10 }
                            value={ props.responsive &&  props.device ? dimensions[device].right : dimensions.right }
                            labelPosition={'bottom'}
                        />
                        <NumberControl
                            label={ __( 'Bottom','ht-contactform' ) }
                            isShiftStepEnabled={ true }
                            onChange={ ( newValue ) => onChangeData( newValue, 'bottom' ) }
                            shiftStep={ 10 }
                            value={ props.responsive &&  props.device ? dimensions[device].bottom : dimensions.bottom }
                            labelPosition={'bottom'}
                        />
                        <NumberControl
                            label={ __( 'Left','ht-contactform' ) }
                            isShiftStepEnabled={ true }
                            onChange={ ( newValue ) => onChangeData( newValue, 'left' ) }
                            shiftStep={ 10 }
                            value={props.responsive &&  props.device ? dimensions[device].left : dimensions.left }
                            labelPosition={'bottom'}
                        />

                        <Button
							icon='admin-links'
							value= 'yes'
							isPrimary= { ( dimensions.link === 'yes' ) }
                			isSecondary= { dimensions.link !== 'yes' }
							onClick={ setLinkAllHandler }
                			title= { __('Link values together', 'ht-contactform') }
                            showTooltip={true}
						/>
                    </PanelRow>

                </div>

            </Fragment>
         );
     
}
 
export default DimensionsControl;