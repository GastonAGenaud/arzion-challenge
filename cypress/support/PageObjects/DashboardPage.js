/* eslint-disable no-undef */

class DashboardPage {

    getShareBtn() {
      cy.get("body").find("button").contains("Share").click();
      return this;
    }
  }
  
  export default DashboardPage;
  