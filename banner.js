// private List insertProfileBannerInPredefinedPostions(List finalProfileData) {
//   int size = finalProfileData.size();
//   if (size > profileBannerPreDefinedPostions[4] && !bannerProfileDataStack.isEmpty()) {
//       finalProfileData.add(profileBannerPreDefinedPostions[4], bannerProfileDataStack.pop());
//   }
//   if (size > profileBannerPreDefinedPostions[3] && !bannerProfileDataStack.isEmpty()) {
//       finalProfileData.add(profileBannerPreDefinedPostions[3], bannerProfileDataStack.pop());
//   }
//   if (size > profileBannerPreDefinedPostions[2] && !bannerProfileDataStack.isEmpty()) {
//       finalProfileData.add(profileBannerPreDefinedPostions[2], bannerProfileDataStack.pop());
//   }
//   if (size > profileBannerPreDefinedPostions[1] && !bannerProfileDataStack.isEmpty()) {
//       finalProfileData.add(profileBannerPreDefinedPostions[1], bannerProfileDataStack.pop());
//   }
//   if (size > profileBannerPreDefinedPostions[0] && !bannerProfileDataStack.isEmpty()) {
//       finalProfileData.add(profileBannerPreDefinedPostions[0], bannerProfileDataStack.pop());
//   } else {
//       //ANDROID-3399: If list has data less then the minimum predefined postion then it is better to add our personalize banner to end of it.
//       if (size > 0 && size <= profileBannerPreDefinedPostions[0] && !bannerProfileDataStack.isEmpty()) {
//           finalProfileData.add(bannerProfileDataStack.pop());
//       }
//   }
//   return finalProfileData;
// }

const sizeGreaterThanPosition = (size, position) => size > position;

const isBannerProfileDataStackEmpty = bannerProfileDataStack =>
  bannerProfileDataStack.isEmpty();

const POSITION_ONE = profileBannerPreDefinedPositions[1];
const POSITION_TWO = profileBannerPreDefinedPositions[2];
const POSITION_THREE = profileBannerPreDefinedPositions[3];

const preDefinedPositions = [POSITION_ONE, POSITION_TWO, POSITION_THREE];

const popBannerProfileDataStack = bannerProfileDataStack =>
  bannerProfileDataStack.pop();

const getProfileSize = finalProfileData => finalProfileData.size;

const insertProfileBannerInPredefinedPostions = (profileData, position) => {
  return profileData.insertAtPosition(
    profileBannerPreDefinedPositions[position]
  );
};

insertProfileBannerInPredefinedPostions({ name: "some name" }, POSITION_ONE);
