describe("Given Augmented Presentation Exceptions", () => {

	describe("Given a Render Error", () => {
		it("can create a RenderError", () => {
			const e = new Exceptions.RenderError("Test");
			expect(e.name).to.equal("RenderError");
			expect(e.message).to.equal("Test");
		});

		it("can create a ServiceError", () => {
			const e = new Exceptions.ServiceError("Test");
			expect(e.name).to.equal("ServiceError");
			expect(e.message).to.equal("Test");
		});

		it("can create a LoginError", () => {
			const e = new Exceptions.LoginError("Test");
			expect(e.name).to.equal("LoginError");
			expect(e.message).to.equal("Test");
		});
	});
});
