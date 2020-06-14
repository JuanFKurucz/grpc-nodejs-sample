const PROTO_PATH = __dirname + "/com.proto";

const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const comProto = grpc.loadPackageDefinition(packageDefinition).com;

module.exports = { comProto };
