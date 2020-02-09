(function(window, undefined) {
  var dictionary = {
    "079d292a-18e4-4139-8bad-52e27cc52347": "Admin_BackUpScreen",
    "5fdfe5cc-0c3b-4d60-9609-e159d6774f30": "Receptionist_Claims",
    "30aad493-b067-40ce-ae8a-434b7b547013": "Receptionist_MainScreen",
    "a9b34a1d-190c-4843-9e9d-67550a1ea8ae": "Doctor_MainScreen",
    "05a5cd56-bf70-4927-ad6b-1504b51179d9": "Admin_MainScreen",
    "4ef6cbfa-fae2-4a11-bb8d-29e1e12b3744": "Receptionist_EditPatientInfo",
    "246ac1db-ac43-4fbc-bc32-90bc5186f07f": "Doctor_MedicalRecords",
    "cfce8950-23fb-4bc4-8917-95d4c3cbb6c5": "Admin_AddEmployee",
    "20467c68-1ab2-4dd1-9000-b053b58545d3": "Receptionist_Appointments",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Login Screen",
    "82f95b41-e209-4c70-bf12-cb4c3e59e70a": "Admin_EmployeeDetails",
    "e73b655d-d3ec-4dcc-a55c-6e0293422bde": "960 grid - 16 columns",
    "ef07b413-721c-418e-81b1-33a7ed533245": "960 grid - 12 columns",
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