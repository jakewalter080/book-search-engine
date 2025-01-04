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

    