import { createApp } from './main';

export default (ctx) => {
	return new Promise((resolve, reject) => {
		const { app, router, store } = createApp();
		console.log('entry-server.js before route.push');
		router.push(ctx.url);
		console.log('entry-server.js after route.push');
		router.onReady(() => {
			ctx.rendered = () => ctx.state = store.state;
			const matchedComponents = router.getMatchedComponents();
			if (matchedComponents.length === 0) {
				return reject({ code: 404 });
			}
			return resolve(app);
		}, reject);
	});
}