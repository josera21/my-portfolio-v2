/**
 * Official Trident Game legal metadata.
 * Keep in sync with Google Play Data Safety: no data collected, no data shared.
 */
export const tridentLegal = {
	appStoreName: 'Trident Game',
	appName: 'Trident',
	packageId: 'com.gdrink',
	developerLegalName: 'Jose Rafael Camacaro Barraez',
	developerAlias: 'JCamacaro',
	country: 'Venezuela',
	supportEmail: 'camacaroj21@gmail.com',
	developerEmail: 'camjos.shop@proton.me',
	phone: '+584145515553',
	ageRating: 'PEGI/IARC 17+ — Uso de alcohol',
	lastUpdatedIso: '2026-08-30',
	lastUpdatedEs: '30 de agosto de 2026',
	lastUpdatedEn: 'August 30, 2026',
	privacyPath: '/trident-politicas-de-privacidad',
	privacyPathLegacy: '/trident-políticas-de-privacidad',
	termsPath: '/trident-terminos-y-condiciones',
	siteOrigin: 'https://jochidev.com',
} as const;

export const privacyUrl = `${tridentLegal.siteOrigin}${tridentLegal.privacyPath}`;
export const termsUrl = `${tridentLegal.siteOrigin}${tridentLegal.termsPath}`;
