import Joi from 'joi';

export const registerUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(64).required(),
});

export const loginUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(64).required(),
});

export const updateUserSchema = Joi.object({
  email: Joi.string().email(),
  name: Joi.string().min(3).max(50),
  gender: Joi.string().valid('man', 'woman'),
  dailyNorma: Joi.number().min(1500).max(10000),
  weight: Joi.number().min(0).max(700),
  activeHours: Joi.number().min(0).max(12),
  userId: Joi.string(),
  avatar: Joi.string(),
});

export const activateUserSchema = Joi.object({
  activationToken: Joi.string().required(),
});

export const loginWithGoogleOAuthSchema = Joi.object({
  code: Joi.string().required(),
});

export const requestResetPasswordSchema = Joi.object({
  email: Joi.string().email().required(),
});

export const resetPasswordSchema = Joi.object({
  password: Joi.string().min(8).max(64).required(),
  token: Joi.string().required(),
});
