export interface InterestedActivities {
  awareness: boolean;
  capacityBuildingNtraining: boolean;
  research: boolean;
  otherSpecialActivities: boolean;
}

export const DEFAULT_INTERESTED_ACTIVITIES: InterestedActivities = {
  awareness: false,
  capacityBuildingNtraining: false,
  research: false,
  otherSpecialActivities: false
};
