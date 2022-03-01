import db from "../../libs/configs/db";

export default async function verifyTokenDB(token: string) {
  const loginInfo = await db.loginInfo.findUnique({
    where: {
      token: token,
    },
  });

  if (loginInfo) {
    return true;
  } else {
    return false;
  }
}
