// TODO: bring this to .env
const X_API_KEYS = "<FinGrid API KEY>";
const DB_URL = "<MONGO_DB_URI>";

const ELECTRICITY_CONSUMPTION_TYPE = "electricity-consumption";
const ELECTRICITY_FORECAST_TYPE = "electricity-forecast";
const TENTATIVE_PRODUCTION_PREDICTION_TYPE = "tentative-production-prediction";
const ELECTRICITY_PRODUCTION_TYPE = "electricity-production";
const WIND_PRODUCTION_TYPE = "wind-production";
const WIND_FORECAST_TYPE = "wind-forecast";
const NUCLEAR_PRODUCTION_TYPE = "nuclear-production";
const HYDRO_PRODUCTION_TYPE = "hydro-production";

const TEMPERATURE = "temperature";
const TEMPERATURE_FORECAST = "predicted-temperature";
const OBSERVED_WIND = "observed-wind";
const PREDICTED_WIND = "predicted-wind";
const OBSERVED_CLOUDINESS = "observed-cloudiness";

const AVG_TEMP_MONTH = "average-temperature";
const AVG_MAX_TEMP_MONTH = "average-temperature-max";
const AVG_MIN_TEMP_MONTH = "average-temperature-min";

const DATA_PROVIDED_BY_FINGRID = [
  ELECTRICITY_CONSUMPTION_TYPE,
  ELECTRICITY_FORECAST_TYPE,
  TENTATIVE_PRODUCTION_PREDICTION_TYPE,
  ELECTRICITY_PRODUCTION_TYPE,
  WIND_FORECAST_TYPE,
  WIND_PRODUCTION_TYPE,
  NUCLEAR_PRODUCTION_TYPE,
  HYDRO_PRODUCTION_TYPE
];

const TYPE_TO_DATA_INTERVAL_ON_MINUTES = {
  [ELECTRICITY_CONSUMPTION_TYPE]: 60,
  [ELECTRICITY_FORECAST_TYPE]: 60,
  [TENTATIVE_PRODUCTION_PREDICTION_TYPE]: 60,
  [ELECTRICITY_PRODUCTION_TYPE]: 60,
  [WIND_FORECAST_TYPE]: 60,
  [WIND_PRODUCTION_TYPE]: 3,
  [NUCLEAR_PRODUCTION_TYPE]: 3,
  [HYDRO_PRODUCTION_TYPE]: 3
};

const TYPE_TO_VAR_ID = {
  [ELECTRICITY_CONSUMPTION_TYPE]: 193,
  [ELECTRICITY_FORECAST_TYPE]: 165,
  [TENTATIVE_PRODUCTION_PREDICTION_TYPE]: 242,
  [ELECTRICITY_PRODUCTION_TYPE]: 192,
  [WIND_FORECAST_TYPE]: 245,
  [WIND_PRODUCTION_TYPE]: 181,
  [NUCLEAR_PRODUCTION_TYPE]: 188,
  [HYDRO_PRODUCTION_TYPE]: 191,
  [TEMPERATURE]: "TA_PT1H_AVG",
  [OBSERVED_WIND]: "WS_PT1H_AVG",
  [OBSERVED_CLOUDINESS]: "n_man",
  [PREDICTED_WIND]: "WindSpeedMS",
  [TEMPERATURE_FORECAST]: "temperature",
  [AVG_TEMP_MONTH]: "tday",
  [AVG_MAX_TEMP_MONTH]: "tmax",
  [AVG_MIN_TEMP_MONTH]: "tmin"
};

const GROUPS = ["power", "weather"];
const REQUIRED_BODY_PARAMS = ["descriptor", "startTime", "endTime"];

module.exports = {
  DATA_PROVIDED_BY_FINGRID,
  TYPE_TO_DATA_INTERVAL_ON_MINUTES,
  X_API_KEYS,
  ELECTRICITY_CONSUMPTION_TYPE,
  ELECTRICITY_FORECAST_TYPE,
  TENTATIVE_PRODUCTION_PREDICTION_TYPE,
  ELECTRICITY_PRODUCTION_TYPE,
  WIND_FORECAST_TYPE,
  NUCLEAR_PRODUCTION_TYPE,
  HYDRO_PRODUCTION_TYPE,
  TEMPERATURE,
  TEMPERATURE_FORECAST,
  OBSERVED_WIND,
  OBSERVED_CLOUDINESS,
  PREDICTED_WIND,
  TYPE_TO_VAR_ID,
  REQUIRED_BODY_PARAMS,
  DB_URL,
  GROUPS,
  AVG_MAX_TEMP_MONTH,
  AVG_MIN_TEMP_MONTH,
  AVG_TEMP_MONTH
};
