(function(window, undefined) {
  var dictionary = {
    "fa1eb5d9-76a1-4e3b-bb16-e3bcb2a14c75": "Forgot_password",
    "faddece0-55b6-4cd9-a1fa-5a95279a7663": "Signup_contact_info",
    "dc0a0ac0-30b8-406b-a4b5-d03ab0ce3315": "add appoinment",
    "fab7718d-1002-4bf3-ba73-a66dd56ecf3d": "Profile",
    "2575f860-ae98-4540-8c52-1507c92e0de1": "Login_Signup",
    "7a59fb5b-b30b-4766-86c4-6931c344f1a5": "Redirecting",
    "52f0a5b0-25c4-4856-9de0-761afeb7d4c3": "Submit claim",
    "adb6eaf0-0d42-44de-93b0-86e669808cbc": "View appointments",
    "6f225f60-db28-46e7-aec4-159175dd79d1": "Homepage_1",
    "a0c078a9-9d10-4392-a06d-fac6f33d757e": "Signup_insurance",
    "87b27bf3-8811-4fca-97e9-b84b95349d4b": "appointments details",
    "cae08be5-fe7a-4a13-bd9e-1165fc15bff2": "Contact us",
    "39e752a7-ab1a-40db-8478-7cadf432d95e": "Signup_completion",
    "8a4897e9-b064-4cfa-b08e-6f61f2d8ba02": "Splash screen",
    "677d2c15-4692-49e1-9e03-d008a8d2e7dd": "Signup_personal_information",
    "1432c19d-c891-4d09-9d9e-a0e9b91f9494": "login screen",
    "ac655255-14a1-4920-92fc-5643b79700e7": "تسجيل الدخول او التسجيل",
    "e4628867-5689-4589-9056-3bb6f4bf9199": "Signup_password",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);