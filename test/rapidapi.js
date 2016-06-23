"use strict";

const RapidAPI = require('./../index');
const expect    = require("chai").expect;

describe("RapidAPI Connect", () => {
    it("Gets the base URL", () => {
        expect(RapidAPI.getBaseURL()).to.equal('https://rapidapi.io/connect');
    });

    it("Constructs RapidAPI Connect object", () => {
        let r = new RapidAPI("p", "k");
        expect(r.project).to.equal("p");
        expect(r.key).to.equal("k");
    });

    it("Builds block URL", () => {
        expect(RapidAPI.blockURLBuilder("p", "k")).to.equal('https://rapidapi.io/connect/p/k');
    });
});