/**
 * Error Class for user with render exceptions
 * @extends Error
 */
class RenderError extends Error {
  constructor(message) {
    super(message)
    this.name = "RenderError";
    this.message = message;
  };
};
/**
 * Error Class for user with service exceptions
 * @extends Error
 */
class ServiceError extends Error {
  constructor(message) {
    super(message)
    this.name = "ServiceError";
    this.message = message;
  };
};
/**
 * Error Class for user with login exceptions
 * @extends Error
 */
class LoginError extends Error {
  constructor(message) {
    super(message)
    this.name = "LoginError";
    this.message = message;
  };
};

export { RenderError, ServiceError, LoginError };
