/*
 *
 * Copyright 2015 gRPC authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
const grpc = require("grpc");
const { comProto } = require("./utils/com");
const { Customer } = require("./models/customer");

/**
 * Implements the SayHello RPC method.
 */
const getCustomerEmail = async (call, callback) => {
  const customer = await Customer.findOne({
    where: {
      Id: call.request.id,
    },
  });
  callback(null, { email: customer.Email });
};

/**
 * Starts an RPC server that receives requests for the Greeter service at the
 * sample server port
 */
const main = () => {
  const server = new grpc.Server();
  server.addService(comProto.Customer.service, {
    getCustomerEmail: getCustomerEmail,
  });
  server.bind("0.0.0.0:50051", grpc.ServerCredentials.createInsecure());
  server.start();
};

main();
