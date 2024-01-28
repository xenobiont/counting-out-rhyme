// Your code here

function wait(cb, time) {
	return new Promise((resolve) =>
		setTimeout(() => {
			cb();
			resolve();
		}, time),
	);
}

Promise.resolve()
	.then(() => {
		console.time('sea');
	})
	.then(
		() =>
			new Promise((resolve) =>
				setTimeout(() => {
					console.log('Under the ocean, green and deep');
					resolve();
				}, 1000),
			),
	)
	.then(() => wait(() => console.log('Lie the fishes fast asleep'), 2000))
	.then(() => wait(() => console.log('Under the arm and over the shoe'), 3000))
	.then(() =>
		wait(() => console.log('Tap on the head, and out goes YOU!'), 4000),
	)
	.then(() => {
		console.timeEnd('sea');
	});
