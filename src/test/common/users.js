/* eslint-disable camelcase */
import { env } from '../config/envConfig';

const merge = require('deepmerge');

const allUsers = {};

export const users = allUsers[env];
