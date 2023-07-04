import { UserDocument } from "../models/User";

const createUserService = async (user: UserDocument): Promise<UserDocument> => {
  return user.save();
};

export default { createUserService };
