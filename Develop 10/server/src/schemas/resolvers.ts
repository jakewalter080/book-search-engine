import { AuthenticationError } from 'apollo-server-express';
import { User } from '../models';
import { signToken } from '../services/auth';
import { UserDocument } from '../types/express';

interface BookInput {
  bookId: string;
  authors: string[];
  description: string;
  title: string;
  image: string;
  link: string;
}

interface Context {
    user?: UserDocument;
  }

  export const resolvers = {
    Query: {
      me: async (_: any, __: any, context: Context) => {
        if (context.user) {
          return await User.findById(context.user._id);
        }
        throw new AuthenticationError('Not logged in');
      },
    },

    Mutation: {
        addUser: async (_: any, { username, email, password }: { username: string; email: string; password: string }) => {
          const user = await User.create({ username, email, password });
          const token = signToken(user);
          return { token, user };
        },

        login: async (_: any, { email, password }: { email: string; password: string }) => {
            const user = await User.findOne({ email });
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(user);
            return { token, user };
          },