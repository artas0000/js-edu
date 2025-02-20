/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
  focus = 'family',
  knowsProgramming = true,
  config = {
    family: 4
  }
) {

  const learnJS = 800;
  const learnBasic = 500;
  const speedConfig = config[focus];

  if (knowsProgramming) {
    return Math.ceil(learnJS / speedConfig);
  } else {
    return Math.ceil((learnJS + learnBasic) / speedConfig);
  }
};