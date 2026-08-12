const {model} = require("mongoose");

const {HoldingSchema} = require("../schemas/HoldingSchema");

const HoldingModel = new model("holdings",HoldingSchema);

module.exports={HoldingModel};