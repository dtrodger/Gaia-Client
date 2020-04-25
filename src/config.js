export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_0RcMh7KFdg2XvpQ6hkpAxDEF",
  s3: {
    REGION: "us-east-2",
    BUCKET: "gaia-api"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://3ebuxyu5si.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_3EMPlCVY4",
    APP_CLIENT_ID: "2k2ibre9oadtvrr8uaqvl11ch9",
    IDENTITY_POOL_ID: "us-east-2:776036c6-d082-4251-8b04-e81addca4e3a"
  }
};