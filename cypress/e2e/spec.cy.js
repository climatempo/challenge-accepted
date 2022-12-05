import "cypress-real-events"

describe("Testing Home", () => {
  it("should have a blue navbar with three div equally distanced", () => {
    cy.visit("/")

    cy.get("nav")
      .should("have.css", "background-color", "rgb(21, 101, 192)")
      .and("have.css", "justify-content", "space-between")
      .children()
      .should("have.length", 3)
  })

  it("nav should have a button with a lupe that activates and closes search", () => {
    cy.get("#search").find("img").should("have.attr", "alt", "lupa")

    cy.get("input").should("not.be.visible")

    cy.get("#search").click()

    cy.get("input[type='search']").should("be.visible")

    cy.get("#search").click()

    cy.get("input[type='search']").should("not.be.visible")
  })

  context("Testing search bar", () => {
    const blue = "rgb(21, 101, 192)"
    const gray = "rgb(128, 128, 128)"

    beforeEach(() => {
      cy.get("[data-test-id='search_bar']").as("search_bar")
      cy.get("[data-test-id='suggestions_panel']").as("suggestions_panel")
      cy.get("[data-test-id='suggestions_list']").as("suggestions_list")
      cy.get("[data-test-id='city_name']").as("city")
    })

    it("should display a translucid white field with an input search bar", () => {
      cy.get("#search").click()

      cy.get("@suggestions_panel")
        .should("be.visible")
        .and("have.css", "background-color", "rgba(255, 255, 255, 0.9)")

      cy.get("@search_bar").should("be.visible")
    })

    it("should close when Esc is pressed", () => {
      cy.realPress("Escape")

      cy.get("@search_bar").should("not.be.visible")
    })

    it("should accept typing and perform search, showing suggestions", () => {
      cy.get("#search").click()

      cy.get("@search_bar").type("sa")

      cy.get("@suggestions_panel").should("contain", "Osasco", "São Paulo")

      cy.get("@search_bar").focus().type("sao")

      cy.get("@suggestions_panel")
        .should("contain", "São Paulo")
        .and("not.contain", "Osasco")

      cy.get("@search_bar").focus().should("have.value", "")

      cy.get("@suggestions_list").children().should("not.exist")
    })

    it("should not perform search immediatly, but wait for debounce", () => {
      cy.get("@search_bar").focus().type("sa")

      cy.get("@suggestions_list").children().should("not.exist")

      cy.wait(1000)

      cy.get("@suggestions_list").children().should("exist")
    })

    it("should change color of selection with keyboard navigation - blue is selected, gray unselected", () => {
      cy.get("@suggestions_list").children().as("cities")
      cy.get("@cities").first().should("have.css", "color", gray) //  no option selected
      cy.get("@cities").last().should("have.css", "color", gray) //  no option selected

      cy.realPress("ArrowDown")

      cy.get("@suggestions_list").children().as("cities")
      cy.get("@cities").first().should("have.css", "color", blue) // <- option selected
      cy.get("@cities").last().should("have.css", "color", gray) //  not selected

      cy.realPress("ArrowDown")

      cy.get("@cities").first().should("have.css", "color", gray) // not selected
      cy.get("@cities").last().should("have.css", "color", blue) // <- last option selected
    })

    it("should not navigate outside of suggestions", () => {
      cy.get("@suggestions_list").children().as("cities")

      cy.realPress("ArrowDown") // last option is selected, but we press down again

      cy.get("@cities").first().should("have.css", "color", gray) //  not selected
      cy.get("@cities").last().should("have.css", "color", blue) // <- option still selected

      cy.realPress("ArrowUp") // we go up again, and selection changes

      cy.get("@cities").first().should("have.css", "color", blue) // <- now first option selected again
      cy.get("@cities").last().should("have.css", "color", gray) //  not selected

      cy.realPress("ArrowUp") // we press up again but first option' still selected

      cy.get("@cities").first().should("have.css", "color", blue) // <- first option still selected
      cy.get("@cities").last().should("have.css", "color", gray) //  not selected
    })

    it("should be able to confirm selected city by pressing Enter", () => {
      cy.get("@suggestions_list").children().as("cities")

      cy.realPress("ArrowDown") // go back down

      cy.get("@cities").last().should("have.css", "color", blue) //  São Paulo is now selected

      cy.realPress("Enter")

      cy.wait(1000)

      cy.get("[data-test-id='city_name']").should("have.text", "São Paulo, SP")
    })
  })

  context("Testing Deck Rendering", () => {
    const selectOsasco = () => {
      cy.get("#search").click()
      cy.get("[data-test-id='search_bar']").focus().type("osas").wait(1000)

      cy.realPress("ArrowDown")
      cy.realPress("Enter").wait(500)
    }
    const selectSaoPaulo = () => {
      cy.get("#search").click()
      cy.get("[data-test-id='search_bar']").focus().type("sao").wait(1000)

      cy.realPress("ArrowDown")

      cy.realPress("Enter").wait(500)
    }

    it("should change the data as we change cities", () => {
      selectOsasco()
      cy.get("[data-test-id='city_name']").should("have.text", "Osasco, SP")

      cy.get("[data-test-id='deck']").children().first().as("first_card")
      cy.get("@first_card")
        .should("contain", "01/02/2017")
        .and("contain", "28ºC")
        .and("contain", "20ºC")
        .and("not.contain", "27ºC")
        .and("not.contain", "19ºC")

      selectSaoPaulo()

      cy.get("[data-test-id='city_name']").should("have.text", "São Paulo, SP")

      cy.get("[data-test-id='deck']").children().first().as("first_card")
      cy.get("@first_card")
        .should("contain", "01/02/2017")
        .and("contain", "27ºC")
        .and("contain", "19ºC")
        .and("not.contain", "28ºC")
        .and("not.contain", "20ºC")
    })
  })

  context("Testing Settings Menu", () => {
    beforeEach(() => {
      cy.get("[data-test-id='deck']").children().first().as("first_card")
      cy.get("[data-test-id='menu']").as("menu")
      cy.get("[data-test-id='menu_icon']").as("menu_icon")
      cy.get("[data-test-id='close_icon']").as("close_icon")
      cy.get("[data-test-id='toggle_temperature']").as("toggle_temperature")
      cy.get("[data-test-id='toggle_volume']").as("toggle_volume")
    })

    it("Should open when clicking on menu button", () => {
      cy.get("@menu").should("not.be.visible")
      cy.get("@menu_icon").click()

      cy.get("@menu").should("be.visible")
    })

    it("Should change temperature when toggle temperature button is clicked", () => {
      // São Paulo is still selected, with 27ºC max and 19ºC min
      cy.get("@first_card").should("contain", "27ºC").and("contain", "19ºC")

      cy.get("@toggle_temperature").click()

      cy.get("@first_card")
        .and("contain", "81ºF")
        .and("contain", "66ºF")
        .and("not.contain", "27ºC")
        .and("not.contain", "19ºC")
    })

    it("Should change volume when toggle volume button is clicked", () => {
      // São Paulo is still selected, with 27ºC max and 19ºC min
      cy.get("@first_card").should("contain", "20mm")

      cy.get("@toggle_volume").click()

      cy.get("@first_card")
        .should("contain", "0.79inch")
        .and("not.contain", "20mm")
    })
  })
})
