const authPage = (permisions) => {
	const auth = (req, res, next) => {
		const user = req.body;
		console.log(`User: ${JSON.stringify(user)}`);
		if (user) {
			if (permisions.includes(user.role)) {
				next();
			} else {
				res.status(401).json({
					status: "Failed!",
					msg: "You are not authorized to access this page!",
				});
			}
		}
	};

	return auth;
};

const authCourse = (req, res, next) => {
	const id = Number(req.params.id);
	console.log(id);
	console.log(req.body.courses);

	if (req.body.courses.includes(id)) {
		next();
	} else {
	return res.status(401).json({
		status: "Failed!",
		msg: "You dont have access to this Course!",
	});
}
};

export { authPage, authCourse };
