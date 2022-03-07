export function UseRegex() {
  //올바른 이메일일 경우  true, 아닐 경우 false 반환
  const checkEmail = (email: string) => {
    const emailRegExp = /^[A-Za-z0-9]([-_]?[0-9a-zA-Z])*@[A-Za-z0-9]*\.[a-zA-Z]{2,3}$/;

    return emailRegExp.test(email);
  };

  return { checkEmail };
}
