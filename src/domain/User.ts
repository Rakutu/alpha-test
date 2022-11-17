type UserCountry = string;

type UserProfession = string;

export interface User {
  id: number;
  name: string;
  location: UserCountry;
  designation: UserProfession;
  liked: boolean;
  avatar: string;
  message: string;
  lorem: string;
  rating: number;
  audio: string;
}