/**
 * Internal dependencies.
 */
import * as helpers from '../../../../../.dev/tests/jest/helpers';
import { name, settings } from '../index';
import googleFonts from '../../../../components/font-family/fonts';

const variations = {
	className: [ undefined, '', 'random classes' ],
	width: [ undefined, '', '50', '25' ],
	contentAlign: [ undefined, 'left', 'center', 'right' ],
	coblocks: [ undefined, {}, { id: undefined }, { id: 'testing' } ],
	fontSize: [ undefined, 'small', 'large' ],
	customFontSize: [ undefined, 0, 16, 100 ],
	fontFamily: [ undefined, ...Object.keys( googleFonts ) ],
	textColor: [ undefined, 'primary' ],
	customTextColor: [ undefined, '#123456' ],
	lineHeight: [ undefined, 0, 3, 2.5 ],
	letterSpacing: [ undefined, 0, 3, -1, 2.5 ],
	fontWeight: [ undefined, '', 'normal', 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900' ],
	textTransform: [ undefined, '', 'uppercase', 'lowercase', 'capitalize', 'initial' ],
	noBottomSpacing: [ undefined, true, false ],
	noTopSpacing: [ undefined, true, false ],
	showInserter: [ undefined, true, false ],
	paddingTop: [ 0, 100 ],
	paddingRight: [ 0, 100 ],
	paddingBottom: [ 0, 100 ],
	paddingLeft: [ 0, 100 ],
	paddingTopTablet: [ 0, 100 ],
	paddingRightTablet: [ 0, 100 ],
	paddingBottomTablet: [ 0, 100 ],
	paddingLeftTablet: [ 0, 100 ],
	paddingTopMobile: [ 0, 100 ],
	paddingRightMobile: [ 0, 100 ],
	paddingBottomMobile: [ 0, 100 ],
	paddingLeftMobile: [ 0, 100 ],
	paddingUnit: [ 'px', 'em', '%' ],
	paddingSize: [ 'no', 'small', 'medium', 'large', 'advanced' ],
	paddingSyncUnits: [ true, false ],
	paddingSyncUnitsTablet: [ true, false ],
	paddingSyncUnitsMobile: [ true, false ],
	marginTop: [ 0, 100 ],
	marginRight: [ 0, 100 ],
	marginBottom: [ 0, 100 ],
	marginLeft: [ 0, 100 ],
	marginTopTablet: [ 0, 100 ],
	marginRightTablet: [ 0, 100 ],
	marginBottomTablet: [ 0, 100 ],
	marginLeftTablet: [ 0, 100 ],
	marginTopMobile: [ 0, 100 ],
	marginRightMobile: [ 0, 100 ],
	marginBottomMobile: [ 0, 100 ],
	marginLeftMobile: [ 0, 100 ],
	marginUnit: [ 'px', 'em', '%' ],
	marginSize: [ 'no', 'small', 'medium', 'large', 'advanced' ],
	marginSyncUnits: [ true, false ],
	marginSyncUnitsTablet: [ true, false ],
	marginSyncUnitsMobile: [ true, false ],
	hasMarginControl: [ true, false ],
	hasAlignmentControls: [ true, false ],
	hasStackedControl: [ true, false ],
	backgroundType: [ undefined, '', 'image', 'video' ],
	backgroundImg: [ undefined, '', 'https://website.com/wp-content/uploads/1234/56/image.jpg', 'https://website.com/wp-content/uploads/1234/56/video.mp4' ],
	backgroundPosition: [ undefined, '' ],
	backgroundRepeat: [ 'no-repeat', 'repeat', 'repeat-x', 'repeat-y' ],
	backgroundSize: [ 'cover', 'contain' ],
	backgroundOverlay: [ 0, 100 ],
	backgroundColor: [ undefined, 'primary' ],
	customBackgroundColor: [ '#123456' ],
	hasParallax: [ true, false ],
	focalPoint: [ undefined, { x: 0, y: 0 }, { x: 0.33663366336633666, y: 0.8335193452380952 } ],
	videoMuted: [ true, false ],
	videoLoop: [ true, false ],
	openPopover: [ true, false ],
};

helpers.testDeprecatedBlockVariations( name, settings, variations );
