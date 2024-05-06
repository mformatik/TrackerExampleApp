import {DetailsModel} from "../types/DetailsModel";

/**
 * Represents a ForbiddenException used to indicate access restrictions.
 */
class ForbiddenException extends Error {
  private readonly details: DetailsModel | null = null

  /**
   * Creates a new instance of ForbiddenException.
   * @param details Details associated with the exception (required).
   */
  constructor(details: DetailsModel) {
    super("ForbiddenException error message");
    this.name = "ForbiddenException"
    this.details = details
  }

  /**
   * Gets the details associated with the ForbiddenException.
   * @returns The details object.
   */
  getDetails(): DetailsModel | null {
    return this.details;
  }
}

export default ForbiddenException