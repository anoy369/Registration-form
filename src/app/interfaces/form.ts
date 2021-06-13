import { InterestedActivities } from './interested-activities';

export interface ApplicantForm {
  interestedActivities: InterestedActivities[];
  fullName: string;
  nickName: string;
  gender: string;
  country: string;
  address: string;
  division: string;
  district: string;
  age: number;
}

export const DEFAULT_FORM: ApplicantForm = {
  interestedActivities: [null],
  fullName: '',
  nickName: '',
  gender: '',
  country: '',
  address: '',
  division: '',
  district: '',
  age: 0
};
