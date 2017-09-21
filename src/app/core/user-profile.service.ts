import { USERS } from './user-profile.mock';
import { Injectable } from '@angular/core';

@Injectable()
export class UserProfileService {
  constructor() { }
  // to get all user profile...
  getUserProfile() {
    return USERS;
  }
}
