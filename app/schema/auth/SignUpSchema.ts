import { object, string } from 'yup';
import { EmailRegex } from '@/app/constants/regex';
import { PatternError, RequireError } from '@/app/constants/messages';

export const SignUpSchema = object({
  username: string().required(RequireError),
  email: string().required(RequireError).matches(EmailRegex, PatternError),
  password: string().required(RequireError),
});