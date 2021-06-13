import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { ApplicantForm, DEFAULT_FORM } from '../interfaces/form';
import {DEFAULT_INTERESTED_ACTIVITIES, InterestedActivities} from '../interfaces/interested-activities';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

  preferredAge: boolean;
  interestedField: [InterestedActivities];
  applicantFullName: string;
  applicantNickName: string;
  applicantGender: string;
  applicantCountry: string;
  applicantAddress: string;
  applicantDivision: string;
  applicantDistrict: string;
  applicantAge: number;
  awarenessField: boolean;
  capacityBuildingNtrainingField: boolean;
  researchField: boolean;
  otherField: boolean;
  guardianName: string;
  guardianPassportNumber: number;
  applicantNID: number;
  applicantPhone: number;
  institutionName: string;
  institutionAddress: string;
  institutionCountry: string;
  educationStartDate: Date;
  educationEndDate: Date;
  applicantDegree: string;
  applicantCertificate: string;
  applicantEmail: string;
  applicantBloodGroup: string;
  interestedInBloodDonation: string;
  notInterestedInBloodDonation: string;
  InterestedInBloodDonationInFuture: string;
  applicantBirthday: string;

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
  }

  onYes(): void {
    this.preferredAge = true;
  }

  onNo(): void {
    this.preferredAge = false;
  }

  onSubmit(): void {
    const form: ApplicantForm = DEFAULT_FORM;

    form.interestedActivities = this.interestedField;
    form.fullName = this.applicantFullName;
    form.nickName = this.applicantNickName;
    form.gender = this.applicantGender;
    form.country = this.applicantCountry;
    form.address = this.applicantAddress;
    form.division = this.applicantDivision;
    form.district = this.applicantDistrict;
    form.age = this.applicantAge;

    const fieldChoice: InterestedActivities = DEFAULT_INTERESTED_ACTIVITIES;

    fieldChoice.awareness = this.awarenessField;
    fieldChoice.capacityBuildingNtraining = this.capacityBuildingNtrainingField;
    fieldChoice.research = this.researchField;
    fieldChoice.otherSpecialActivities = this.otherField;

    console.log(form);

    this.crudService.createForm(form).then( res => {
      this.interestedField = [null];
      this.applicantFullName = '';
      this.applicantNickName = '';
      this.applicantGender = '';
      this.applicantCountry = '';
      this.applicantCountry = '';
      this.applicantAddress = '';
      this.applicantDivision = '';
      this.applicantDistrict = '';
      this.applicantAge = undefined;
      this.awarenessField = false;
      this.capacityBuildingNtrainingField = false;
      this.researchField = false;
      this.otherField = false;

      console.log(res);

    }).catch( error => {
      console.log(error);
    });
  }
}
