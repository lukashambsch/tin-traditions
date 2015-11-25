(function(window, angular, undefined) {'use strict';

var urlBase = "/api";
var authHeader = 'authorization';

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.User
 * @header lbServices.User
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `User` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "User",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Users/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__findById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__destroyById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__updateById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__get__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Queries accessTokens of User.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/Users/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__create__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__delete__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__count__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Counts accessTokens of User.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#create
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Users",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#createMany
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Users",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#upsert
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Users",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#exists
         * @methodOf lbServices.User
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Users/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#findById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Users/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#find
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Users",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#findOne
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Users/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#updateAll
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Users/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#deleteById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Users/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#count
         * @methodOf lbServices.User
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Users/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$updateAttributes
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Users/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#createChangeStream
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Users/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#login
         * @methodOf lbServices.User
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/Users/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#logout
         * @methodOf lbServices.User
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/Users/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#confirm
         * @methodOf lbServices.User
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/Users/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#resetPassword
         * @methodOf lbServices.User
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/Users/reset",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/Users" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.User#updateOrCreate
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.User#update
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.User#destroyById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.User#removeById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.User#getCachedCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.User#login} or
         * {@link lbServices.User#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A User instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#isAuthenticated
         * @methodOf lbServices.User
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrentId
         * @methodOf lbServices.User
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.User#modelName
    * @propertyOf lbServices.User
    * @description
    * The name of the model represented by this $resource,
    * i.e. `User`.
    */
    R.modelName = "User";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Tin
 * @header lbServices.Tin
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Tin` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Tin",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/tins/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Tin.giftEntries.findById() instead.
        "prototype$__findById__giftEntries": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tins/:id/giftEntries/:fk",
          method: "GET"
        },

        // INTERNAL. Use Tin.giftEntries.destroyById() instead.
        "prototype$__destroyById__giftEntries": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tins/:id/giftEntries/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Tin.giftEntries.updateById() instead.
        "prototype$__updateById__giftEntries": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tins/:id/giftEntries/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Tin.giftEntries() instead.
        "prototype$__get__giftEntries": {
          isArray: true,
          url: urlBase + "/tins/:id/giftEntries",
          method: "GET"
        },

        // INTERNAL. Use Tin.giftEntries.create() instead.
        "prototype$__create__giftEntries": {
          url: urlBase + "/tins/:id/giftEntries",
          method: "POST"
        },

        // INTERNAL. Use Tin.giftEntries.destroyAll() instead.
        "prototype$__delete__giftEntries": {
          url: urlBase + "/tins/:id/giftEntries",
          method: "DELETE"
        },

        // INTERNAL. Use Tin.giftEntries.count() instead.
        "prototype$__count__giftEntries": {
          url: urlBase + "/tins/:id/giftEntries/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tin#create
         * @methodOf lbServices.Tin
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tin` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/tins",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tin#createMany
         * @methodOf lbServices.Tin
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tin` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/tins",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tin#upsert
         * @methodOf lbServices.Tin
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tin` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/tins",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tin#exists
         * @methodOf lbServices.Tin
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/tins/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tin#findById
         * @methodOf lbServices.Tin
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tin` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/tins/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tin#find
         * @methodOf lbServices.Tin
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tin` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/tins",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tin#findOne
         * @methodOf lbServices.Tin
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tin` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/tins/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tin#updateAll
         * @methodOf lbServices.Tin
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/tins/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tin#deleteById
         * @methodOf lbServices.Tin
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tin` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/tins/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tin#count
         * @methodOf lbServices.Tin
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/tins/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tin#prototype$updateAttributes
         * @methodOf lbServices.Tin
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tin` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/tins/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tin#createChangeStream
         * @methodOf lbServices.Tin
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/tins/change-stream",
          method: "POST"
        },

        // INTERNAL. Use GiftEntry.tin() instead.
        "::get::GiftEntry::tin": {
          url: urlBase + "/giftEntries/:id/tin",
          method: "GET"
        },

        // INTERNAL. Use GiftEntry.tin.create() instead.
        "::create::GiftEntry::tin": {
          url: urlBase + "/giftEntries/:id/tin",
          method: "POST"
        },

        // INTERNAL. Use GiftEntry.tin.createMany() instead.
        "::createMany::GiftEntry::tin": {
          isArray: true,
          url: urlBase + "/giftEntries/:id/tin",
          method: "POST"
        },

        // INTERNAL. Use GiftEntry.tin.update() instead.
        "::update::GiftEntry::tin": {
          url: urlBase + "/giftEntries/:id/tin",
          method: "PUT"
        },

        // INTERNAL. Use GiftEntry.tin.destroy() instead.
        "::destroy::GiftEntry::tin": {
          url: urlBase + "/giftEntries/:id/tin",
          method: "DELETE"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Tin#updateOrCreate
         * @methodOf lbServices.Tin
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tin` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Tin#update
         * @methodOf lbServices.Tin
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Tin#destroyById
         * @methodOf lbServices.Tin
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tin` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Tin#removeById
         * @methodOf lbServices.Tin
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tin` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Tin#modelName
    * @propertyOf lbServices.Tin
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Tin`.
    */
    R.modelName = "Tin";

    /**
     * @ngdoc object
     * @name lbServices.Tin.giftEntries
     * @header lbServices.Tin.giftEntries
     * @object
     * @description
     *
     * The object `Tin.giftEntries` groups methods
     * manipulating `GiftEntry` instances related to `Tin`.
     *
     * Call {@link lbServices.Tin#giftEntries Tin.giftEntries()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Tin#giftEntries
         * @methodOf lbServices.Tin
         *
         * @description
         *
         * Queries giftEntries of Tin.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `GiftEntry` object.)
         * </em>
         */
        R.giftEntries = function() {
          var TargetResource = $injector.get("GiftEntry");
          var action = TargetResource["::get::Tin::giftEntries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tin.giftEntries#count
         * @methodOf lbServices.Tin.giftEntries
         *
         * @description
         *
         * Counts giftEntries of Tin.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.giftEntries.count = function() {
          var TargetResource = $injector.get("GiftEntry");
          var action = TargetResource["::count::Tin::giftEntries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tin.giftEntries#create
         * @methodOf lbServices.Tin.giftEntries
         *
         * @description
         *
         * Creates a new instance in giftEntries of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `GiftEntry` object.)
         * </em>
         */
        R.giftEntries.create = function() {
          var TargetResource = $injector.get("GiftEntry");
          var action = TargetResource["::create::Tin::giftEntries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tin.giftEntries#createMany
         * @methodOf lbServices.Tin.giftEntries
         *
         * @description
         *
         * Creates a new instance in giftEntries of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `GiftEntry` object.)
         * </em>
         */
        R.giftEntries.createMany = function() {
          var TargetResource = $injector.get("GiftEntry");
          var action = TargetResource["::createMany::Tin::giftEntries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tin.giftEntries#destroyAll
         * @methodOf lbServices.Tin.giftEntries
         *
         * @description
         *
         * Deletes all giftEntries of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.giftEntries.destroyAll = function() {
          var TargetResource = $injector.get("GiftEntry");
          var action = TargetResource["::delete::Tin::giftEntries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tin.giftEntries#destroyById
         * @methodOf lbServices.Tin.giftEntries
         *
         * @description
         *
         * Delete a related item by id for giftEntries.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for giftEntries
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.giftEntries.destroyById = function() {
          var TargetResource = $injector.get("GiftEntry");
          var action = TargetResource["::destroyById::Tin::giftEntries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tin.giftEntries#findById
         * @methodOf lbServices.Tin.giftEntries
         *
         * @description
         *
         * Find a related item by id for giftEntries.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for giftEntries
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `GiftEntry` object.)
         * </em>
         */
        R.giftEntries.findById = function() {
          var TargetResource = $injector.get("GiftEntry");
          var action = TargetResource["::findById::Tin::giftEntries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tin.giftEntries#updateById
         * @methodOf lbServices.Tin.giftEntries
         *
         * @description
         *
         * Update a related item by id for giftEntries.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for giftEntries
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `GiftEntry` object.)
         * </em>
         */
        R.giftEntries.updateById = function() {
          var TargetResource = $injector.get("GiftEntry");
          var action = TargetResource["::updateById::Tin::giftEntries"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Location
 * @header lbServices.Location
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Location` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Location",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/locations/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Location.givers.findById() instead.
        "prototype$__findById__givers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/locations/:id/givers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Location.givers.destroyById() instead.
        "prototype$__destroyById__givers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/locations/:id/givers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Location.givers.updateById() instead.
        "prototype$__updateById__givers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/locations/:id/givers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Location.givers.link() instead.
        "prototype$__link__givers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/locations/:id/givers/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Location.givers.unlink() instead.
        "prototype$__unlink__givers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/locations/:id/givers/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Location.givers.exists() instead.
        "prototype$__exists__givers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/locations/:id/givers/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Location.receivers.findById() instead.
        "prototype$__findById__receivers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/locations/:id/receivers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Location.receivers.destroyById() instead.
        "prototype$__destroyById__receivers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/locations/:id/receivers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Location.receivers.updateById() instead.
        "prototype$__updateById__receivers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/locations/:id/receivers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Location.receivers.link() instead.
        "prototype$__link__receivers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/locations/:id/receivers/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Location.receivers.unlink() instead.
        "prototype$__unlink__receivers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/locations/:id/receivers/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Location.receivers.exists() instead.
        "prototype$__exists__receivers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/locations/:id/receivers/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Location.givers() instead.
        "prototype$__get__givers": {
          isArray: true,
          url: urlBase + "/locations/:id/givers",
          method: "GET"
        },

        // INTERNAL. Use Location.givers.create() instead.
        "prototype$__create__givers": {
          url: urlBase + "/locations/:id/givers",
          method: "POST"
        },

        // INTERNAL. Use Location.givers.destroyAll() instead.
        "prototype$__delete__givers": {
          url: urlBase + "/locations/:id/givers",
          method: "DELETE"
        },

        // INTERNAL. Use Location.givers.count() instead.
        "prototype$__count__givers": {
          url: urlBase + "/locations/:id/givers/count",
          method: "GET"
        },

        // INTERNAL. Use Location.receivers() instead.
        "prototype$__get__receivers": {
          isArray: true,
          url: urlBase + "/locations/:id/receivers",
          method: "GET"
        },

        // INTERNAL. Use Location.receivers.create() instead.
        "prototype$__create__receivers": {
          url: urlBase + "/locations/:id/receivers",
          method: "POST"
        },

        // INTERNAL. Use Location.receivers.destroyAll() instead.
        "prototype$__delete__receivers": {
          url: urlBase + "/locations/:id/receivers",
          method: "DELETE"
        },

        // INTERNAL. Use Location.receivers.count() instead.
        "prototype$__count__receivers": {
          url: urlBase + "/locations/:id/receivers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Location#create
         * @methodOf lbServices.Location
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Location` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/locations",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Location#createMany
         * @methodOf lbServices.Location
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Location` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/locations",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Location#upsert
         * @methodOf lbServices.Location
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Location` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/locations",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Location#exists
         * @methodOf lbServices.Location
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/locations/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Location#findById
         * @methodOf lbServices.Location
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Location` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/locations/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Location#find
         * @methodOf lbServices.Location
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Location` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/locations",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Location#findOne
         * @methodOf lbServices.Location
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Location` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/locations/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Location#updateAll
         * @methodOf lbServices.Location
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/locations/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Location#deleteById
         * @methodOf lbServices.Location
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Location` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/locations/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Location#count
         * @methodOf lbServices.Location
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/locations/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Location#prototype$updateAttributes
         * @methodOf lbServices.Location
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Location` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/locations/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Location#createChangeStream
         * @methodOf lbServices.Location
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/locations/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Giver.location() instead.
        "::get::Giver::location": {
          url: urlBase + "/givers/:id/location",
          method: "GET"
        },

        // INTERNAL. Use Giver.location.create() instead.
        "::create::Giver::location": {
          url: urlBase + "/givers/:id/location",
          method: "POST"
        },

        // INTERNAL. Use Giver.location.createMany() instead.
        "::createMany::Giver::location": {
          isArray: true,
          url: urlBase + "/givers/:id/location",
          method: "POST"
        },

        // INTERNAL. Use Giver.location.update() instead.
        "::update::Giver::location": {
          url: urlBase + "/givers/:id/location",
          method: "PUT"
        },

        // INTERNAL. Use Giver.location.destroy() instead.
        "::destroy::Giver::location": {
          url: urlBase + "/givers/:id/location",
          method: "DELETE"
        },

        // INTERNAL. Use Receiver.location() instead.
        "::get::Receiver::location": {
          url: urlBase + "/receivers/:id/location",
          method: "GET"
        },

        // INTERNAL. Use Receiver.location.create() instead.
        "::create::Receiver::location": {
          url: urlBase + "/receivers/:id/location",
          method: "POST"
        },

        // INTERNAL. Use Receiver.location.createMany() instead.
        "::createMany::Receiver::location": {
          isArray: true,
          url: urlBase + "/receivers/:id/location",
          method: "POST"
        },

        // INTERNAL. Use Receiver.location.update() instead.
        "::update::Receiver::location": {
          url: urlBase + "/receivers/:id/location",
          method: "PUT"
        },

        // INTERNAL. Use Receiver.location.destroy() instead.
        "::destroy::Receiver::location": {
          url: urlBase + "/receivers/:id/location",
          method: "DELETE"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Location#updateOrCreate
         * @methodOf lbServices.Location
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Location` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Location#update
         * @methodOf lbServices.Location
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Location#destroyById
         * @methodOf lbServices.Location
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Location` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Location#removeById
         * @methodOf lbServices.Location
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Location` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Location#modelName
    * @propertyOf lbServices.Location
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Location`.
    */
    R.modelName = "Location";

    /**
     * @ngdoc object
     * @name lbServices.Location.givers
     * @header lbServices.Location.givers
     * @object
     * @description
     *
     * The object `Location.givers` groups methods
     * manipulating `Giver` instances related to `Location`.
     *
     * Call {@link lbServices.Location#givers Location.givers()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Location#givers
         * @methodOf lbServices.Location
         *
         * @description
         *
         * Queries givers of Location.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Giver` object.)
         * </em>
         */
        R.givers = function() {
          var TargetResource = $injector.get("Giver");
          var action = TargetResource["::get::Location::givers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Location.givers#count
         * @methodOf lbServices.Location.givers
         *
         * @description
         *
         * Counts givers of Location.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.givers.count = function() {
          var TargetResource = $injector.get("Giver");
          var action = TargetResource["::count::Location::givers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Location.givers#create
         * @methodOf lbServices.Location.givers
         *
         * @description
         *
         * Creates a new instance in givers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Giver` object.)
         * </em>
         */
        R.givers.create = function() {
          var TargetResource = $injector.get("Giver");
          var action = TargetResource["::create::Location::givers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Location.givers#createMany
         * @methodOf lbServices.Location.givers
         *
         * @description
         *
         * Creates a new instance in givers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Giver` object.)
         * </em>
         */
        R.givers.createMany = function() {
          var TargetResource = $injector.get("Giver");
          var action = TargetResource["::createMany::Location::givers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Location.givers#destroyAll
         * @methodOf lbServices.Location.givers
         *
         * @description
         *
         * Deletes all givers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.givers.destroyAll = function() {
          var TargetResource = $injector.get("Giver");
          var action = TargetResource["::delete::Location::givers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Location.givers#destroyById
         * @methodOf lbServices.Location.givers
         *
         * @description
         *
         * Delete a related item by id for givers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for givers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.givers.destroyById = function() {
          var TargetResource = $injector.get("Giver");
          var action = TargetResource["::destroyById::Location::givers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Location.givers#exists
         * @methodOf lbServices.Location.givers
         *
         * @description
         *
         * Check the existence of givers relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for givers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Giver` object.)
         * </em>
         */
        R.givers.exists = function() {
          var TargetResource = $injector.get("Giver");
          var action = TargetResource["::exists::Location::givers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Location.givers#findById
         * @methodOf lbServices.Location.givers
         *
         * @description
         *
         * Find a related item by id for givers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for givers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Giver` object.)
         * </em>
         */
        R.givers.findById = function() {
          var TargetResource = $injector.get("Giver");
          var action = TargetResource["::findById::Location::givers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Location.givers#link
         * @methodOf lbServices.Location.givers
         *
         * @description
         *
         * Add a related item by id for givers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for givers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Giver` object.)
         * </em>
         */
        R.givers.link = function() {
          var TargetResource = $injector.get("Giver");
          var action = TargetResource["::link::Location::givers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Location.givers#unlink
         * @methodOf lbServices.Location.givers
         *
         * @description
         *
         * Remove the givers relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for givers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.givers.unlink = function() {
          var TargetResource = $injector.get("Giver");
          var action = TargetResource["::unlink::Location::givers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Location.givers#updateById
         * @methodOf lbServices.Location.givers
         *
         * @description
         *
         * Update a related item by id for givers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for givers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Giver` object.)
         * </em>
         */
        R.givers.updateById = function() {
          var TargetResource = $injector.get("Giver");
          var action = TargetResource["::updateById::Location::givers"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Location.receivers
     * @header lbServices.Location.receivers
     * @object
     * @description
     *
     * The object `Location.receivers` groups methods
     * manipulating `Receiver` instances related to `Location`.
     *
     * Call {@link lbServices.Location#receivers Location.receivers()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Location#receivers
         * @methodOf lbServices.Location
         *
         * @description
         *
         * Queries receivers of Location.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Receiver` object.)
         * </em>
         */
        R.receivers = function() {
          var TargetResource = $injector.get("Receiver");
          var action = TargetResource["::get::Location::receivers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Location.receivers#count
         * @methodOf lbServices.Location.receivers
         *
         * @description
         *
         * Counts receivers of Location.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.receivers.count = function() {
          var TargetResource = $injector.get("Receiver");
          var action = TargetResource["::count::Location::receivers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Location.receivers#create
         * @methodOf lbServices.Location.receivers
         *
         * @description
         *
         * Creates a new instance in receivers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Receiver` object.)
         * </em>
         */
        R.receivers.create = function() {
          var TargetResource = $injector.get("Receiver");
          var action = TargetResource["::create::Location::receivers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Location.receivers#createMany
         * @methodOf lbServices.Location.receivers
         *
         * @description
         *
         * Creates a new instance in receivers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Receiver` object.)
         * </em>
         */
        R.receivers.createMany = function() {
          var TargetResource = $injector.get("Receiver");
          var action = TargetResource["::createMany::Location::receivers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Location.receivers#destroyAll
         * @methodOf lbServices.Location.receivers
         *
         * @description
         *
         * Deletes all receivers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.receivers.destroyAll = function() {
          var TargetResource = $injector.get("Receiver");
          var action = TargetResource["::delete::Location::receivers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Location.receivers#destroyById
         * @methodOf lbServices.Location.receivers
         *
         * @description
         *
         * Delete a related item by id for receivers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for receivers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.receivers.destroyById = function() {
          var TargetResource = $injector.get("Receiver");
          var action = TargetResource["::destroyById::Location::receivers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Location.receivers#exists
         * @methodOf lbServices.Location.receivers
         *
         * @description
         *
         * Check the existence of receivers relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for receivers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Receiver` object.)
         * </em>
         */
        R.receivers.exists = function() {
          var TargetResource = $injector.get("Receiver");
          var action = TargetResource["::exists::Location::receivers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Location.receivers#findById
         * @methodOf lbServices.Location.receivers
         *
         * @description
         *
         * Find a related item by id for receivers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for receivers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Receiver` object.)
         * </em>
         */
        R.receivers.findById = function() {
          var TargetResource = $injector.get("Receiver");
          var action = TargetResource["::findById::Location::receivers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Location.receivers#link
         * @methodOf lbServices.Location.receivers
         *
         * @description
         *
         * Add a related item by id for receivers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for receivers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Receiver` object.)
         * </em>
         */
        R.receivers.link = function() {
          var TargetResource = $injector.get("Receiver");
          var action = TargetResource["::link::Location::receivers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Location.receivers#unlink
         * @methodOf lbServices.Location.receivers
         *
         * @description
         *
         * Remove the receivers relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for receivers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.receivers.unlink = function() {
          var TargetResource = $injector.get("Receiver");
          var action = TargetResource["::unlink::Location::receivers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Location.receivers#updateById
         * @methodOf lbServices.Location.receivers
         *
         * @description
         *
         * Update a related item by id for receivers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for receivers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Receiver` object.)
         * </em>
         */
        R.receivers.updateById = function() {
          var TargetResource = $injector.get("Receiver");
          var action = TargetResource["::updateById::Location::receivers"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.GiftEntry
 * @header lbServices.GiftEntry
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `GiftEntry` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "GiftEntry",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/giftEntries/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use GiftEntry.tin() instead.
        "prototype$__get__tin": {
          url: urlBase + "/giftEntries/:id/tin",
          method: "GET"
        },

        // INTERNAL. Use GiftEntry.tin.create() instead.
        "prototype$__create__tin": {
          url: urlBase + "/giftEntries/:id/tin",
          method: "POST"
        },

        // INTERNAL. Use GiftEntry.tin.update() instead.
        "prototype$__update__tin": {
          url: urlBase + "/giftEntries/:id/tin",
          method: "PUT"
        },

        // INTERNAL. Use GiftEntry.tin.destroy() instead.
        "prototype$__destroy__tin": {
          url: urlBase + "/giftEntries/:id/tin",
          method: "DELETE"
        },

        // INTERNAL. Use GiftEntry.giver() instead.
        "prototype$__get__giver": {
          url: urlBase + "/giftEntries/:id/giver",
          method: "GET"
        },

        // INTERNAL. Use GiftEntry.giver.create() instead.
        "prototype$__create__giver": {
          url: urlBase + "/giftEntries/:id/giver",
          method: "POST"
        },

        // INTERNAL. Use GiftEntry.giver.update() instead.
        "prototype$__update__giver": {
          url: urlBase + "/giftEntries/:id/giver",
          method: "PUT"
        },

        // INTERNAL. Use GiftEntry.giver.destroy() instead.
        "prototype$__destroy__giver": {
          url: urlBase + "/giftEntries/:id/giver",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.GiftEntry#create
         * @methodOf lbServices.GiftEntry
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `GiftEntry` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/giftEntries",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.GiftEntry#createMany
         * @methodOf lbServices.GiftEntry
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `GiftEntry` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/giftEntries",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.GiftEntry#upsert
         * @methodOf lbServices.GiftEntry
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `GiftEntry` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/giftEntries",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.GiftEntry#exists
         * @methodOf lbServices.GiftEntry
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/giftEntries/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.GiftEntry#findById
         * @methodOf lbServices.GiftEntry
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `GiftEntry` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/giftEntries/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.GiftEntry#find
         * @methodOf lbServices.GiftEntry
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `GiftEntry` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/giftEntries",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.GiftEntry#findOne
         * @methodOf lbServices.GiftEntry
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `GiftEntry` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/giftEntries/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.GiftEntry#updateAll
         * @methodOf lbServices.GiftEntry
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/giftEntries/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.GiftEntry#deleteById
         * @methodOf lbServices.GiftEntry
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `GiftEntry` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/giftEntries/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.GiftEntry#count
         * @methodOf lbServices.GiftEntry
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/giftEntries/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.GiftEntry#prototype$updateAttributes
         * @methodOf lbServices.GiftEntry
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `GiftEntry` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/giftEntries/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.GiftEntry#createChangeStream
         * @methodOf lbServices.GiftEntry
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/giftEntries/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Tin.giftEntries.findById() instead.
        "::findById::Tin::giftEntries": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tins/:id/giftEntries/:fk",
          method: "GET"
        },

        // INTERNAL. Use Tin.giftEntries.destroyById() instead.
        "::destroyById::Tin::giftEntries": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tins/:id/giftEntries/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Tin.giftEntries.updateById() instead.
        "::updateById::Tin::giftEntries": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/tins/:id/giftEntries/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Tin.giftEntries() instead.
        "::get::Tin::giftEntries": {
          isArray: true,
          url: urlBase + "/tins/:id/giftEntries",
          method: "GET"
        },

        // INTERNAL. Use Tin.giftEntries.create() instead.
        "::create::Tin::giftEntries": {
          url: urlBase + "/tins/:id/giftEntries",
          method: "POST"
        },

        // INTERNAL. Use Tin.giftEntries.createMany() instead.
        "::createMany::Tin::giftEntries": {
          isArray: true,
          url: urlBase + "/tins/:id/giftEntries",
          method: "POST"
        },

        // INTERNAL. Use Tin.giftEntries.destroyAll() instead.
        "::delete::Tin::giftEntries": {
          url: urlBase + "/tins/:id/giftEntries",
          method: "DELETE"
        },

        // INTERNAL. Use Tin.giftEntries.count() instead.
        "::count::Tin::giftEntries": {
          url: urlBase + "/tins/:id/giftEntries/count",
          method: "GET"
        },

        // INTERNAL. Use Giver.giftEntries.findById() instead.
        "::findById::Giver::giftEntries": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/givers/:id/giftEntries/:fk",
          method: "GET"
        },

        // INTERNAL. Use Giver.giftEntries.destroyById() instead.
        "::destroyById::Giver::giftEntries": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/givers/:id/giftEntries/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Giver.giftEntries.updateById() instead.
        "::updateById::Giver::giftEntries": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/givers/:id/giftEntries/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Giver.giftEntries() instead.
        "::get::Giver::giftEntries": {
          isArray: true,
          url: urlBase + "/givers/:id/giftEntries",
          method: "GET"
        },

        // INTERNAL. Use Giver.giftEntries.create() instead.
        "::create::Giver::giftEntries": {
          url: urlBase + "/givers/:id/giftEntries",
          method: "POST"
        },

        // INTERNAL. Use Giver.giftEntries.createMany() instead.
        "::createMany::Giver::giftEntries": {
          isArray: true,
          url: urlBase + "/givers/:id/giftEntries",
          method: "POST"
        },

        // INTERNAL. Use Giver.giftEntries.destroyAll() instead.
        "::delete::Giver::giftEntries": {
          url: urlBase + "/givers/:id/giftEntries",
          method: "DELETE"
        },

        // INTERNAL. Use Giver.giftEntries.count() instead.
        "::count::Giver::giftEntries": {
          url: urlBase + "/givers/:id/giftEntries/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.GiftEntry#updateOrCreate
         * @methodOf lbServices.GiftEntry
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `GiftEntry` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.GiftEntry#update
         * @methodOf lbServices.GiftEntry
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.GiftEntry#destroyById
         * @methodOf lbServices.GiftEntry
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `GiftEntry` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.GiftEntry#removeById
         * @methodOf lbServices.GiftEntry
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `GiftEntry` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.GiftEntry#modelName
    * @propertyOf lbServices.GiftEntry
    * @description
    * The name of the model represented by this $resource,
    * i.e. `GiftEntry`.
    */
    R.modelName = "GiftEntry";

    /**
     * @ngdoc object
     * @name lbServices.GiftEntry.tin
     * @header lbServices.GiftEntry.tin
     * @object
     * @description
     *
     * The object `GiftEntry.tin` groups methods
     * manipulating `Tin` instances related to `GiftEntry`.
     *
     * Call {@link lbServices.GiftEntry#tin GiftEntry.tin()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.GiftEntry#tin
         * @methodOf lbServices.GiftEntry
         *
         * @description
         *
         * Fetches hasOne relation tin.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tin` object.)
         * </em>
         */
        R.tin = function() {
          var TargetResource = $injector.get("Tin");
          var action = TargetResource["::get::GiftEntry::tin"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.GiftEntry.tin#create
         * @methodOf lbServices.GiftEntry.tin
         *
         * @description
         *
         * Creates a new instance in tin of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tin` object.)
         * </em>
         */
        R.tin.create = function() {
          var TargetResource = $injector.get("Tin");
          var action = TargetResource["::create::GiftEntry::tin"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.GiftEntry.tin#createMany
         * @methodOf lbServices.GiftEntry.tin
         *
         * @description
         *
         * Creates a new instance in tin of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tin` object.)
         * </em>
         */
        R.tin.createMany = function() {
          var TargetResource = $injector.get("Tin");
          var action = TargetResource["::createMany::GiftEntry::tin"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.GiftEntry.tin#destroy
         * @methodOf lbServices.GiftEntry.tin
         *
         * @description
         *
         * Deletes tin of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.tin.destroy = function() {
          var TargetResource = $injector.get("Tin");
          var action = TargetResource["::destroy::GiftEntry::tin"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.GiftEntry.tin#update
         * @methodOf lbServices.GiftEntry.tin
         *
         * @description
         *
         * Update tin of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tin` object.)
         * </em>
         */
        R.tin.update = function() {
          var TargetResource = $injector.get("Tin");
          var action = TargetResource["::update::GiftEntry::tin"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.GiftEntry.giver
     * @header lbServices.GiftEntry.giver
     * @object
     * @description
     *
     * The object `GiftEntry.giver` groups methods
     * manipulating `Giver` instances related to `GiftEntry`.
     *
     * Call {@link lbServices.GiftEntry#giver GiftEntry.giver()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.GiftEntry#giver
         * @methodOf lbServices.GiftEntry
         *
         * @description
         *
         * Fetches hasOne relation giver.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Giver` object.)
         * </em>
         */
        R.giver = function() {
          var TargetResource = $injector.get("Giver");
          var action = TargetResource["::get::GiftEntry::giver"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.GiftEntry.giver#create
         * @methodOf lbServices.GiftEntry.giver
         *
         * @description
         *
         * Creates a new instance in giver of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Giver` object.)
         * </em>
         */
        R.giver.create = function() {
          var TargetResource = $injector.get("Giver");
          var action = TargetResource["::create::GiftEntry::giver"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.GiftEntry.giver#createMany
         * @methodOf lbServices.GiftEntry.giver
         *
         * @description
         *
         * Creates a new instance in giver of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Giver` object.)
         * </em>
         */
        R.giver.createMany = function() {
          var TargetResource = $injector.get("Giver");
          var action = TargetResource["::createMany::GiftEntry::giver"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.GiftEntry.giver#destroy
         * @methodOf lbServices.GiftEntry.giver
         *
         * @description
         *
         * Deletes giver of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.giver.destroy = function() {
          var TargetResource = $injector.get("Giver");
          var action = TargetResource["::destroy::GiftEntry::giver"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.GiftEntry.giver#update
         * @methodOf lbServices.GiftEntry.giver
         *
         * @description
         *
         * Update giver of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Giver` object.)
         * </em>
         */
        R.giver.update = function() {
          var TargetResource = $injector.get("Giver");
          var action = TargetResource["::update::GiftEntry::giver"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Giver
 * @header lbServices.Giver
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Giver` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Giver",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/givers/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Giver.location() instead.
        "prototype$__get__location": {
          url: urlBase + "/givers/:id/location",
          method: "GET"
        },

        // INTERNAL. Use Giver.location.create() instead.
        "prototype$__create__location": {
          url: urlBase + "/givers/:id/location",
          method: "POST"
        },

        // INTERNAL. Use Giver.location.update() instead.
        "prototype$__update__location": {
          url: urlBase + "/givers/:id/location",
          method: "PUT"
        },

        // INTERNAL. Use Giver.location.destroy() instead.
        "prototype$__destroy__location": {
          url: urlBase + "/givers/:id/location",
          method: "DELETE"
        },

        // INTERNAL. Use Giver.giftEntries.findById() instead.
        "prototype$__findById__giftEntries": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/givers/:id/giftEntries/:fk",
          method: "GET"
        },

        // INTERNAL. Use Giver.giftEntries.destroyById() instead.
        "prototype$__destroyById__giftEntries": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/givers/:id/giftEntries/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Giver.giftEntries.updateById() instead.
        "prototype$__updateById__giftEntries": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/givers/:id/giftEntries/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Giver.giftEntries() instead.
        "prototype$__get__giftEntries": {
          isArray: true,
          url: urlBase + "/givers/:id/giftEntries",
          method: "GET"
        },

        // INTERNAL. Use Giver.giftEntries.create() instead.
        "prototype$__create__giftEntries": {
          url: urlBase + "/givers/:id/giftEntries",
          method: "POST"
        },

        // INTERNAL. Use Giver.giftEntries.destroyAll() instead.
        "prototype$__delete__giftEntries": {
          url: urlBase + "/givers/:id/giftEntries",
          method: "DELETE"
        },

        // INTERNAL. Use Giver.giftEntries.count() instead.
        "prototype$__count__giftEntries": {
          url: urlBase + "/givers/:id/giftEntries/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Giver#create
         * @methodOf lbServices.Giver
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Giver` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/givers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Giver#createMany
         * @methodOf lbServices.Giver
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Giver` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/givers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Giver#upsert
         * @methodOf lbServices.Giver
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Giver` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/givers",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Giver#exists
         * @methodOf lbServices.Giver
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/givers/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Giver#findById
         * @methodOf lbServices.Giver
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Giver` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/givers/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Giver#find
         * @methodOf lbServices.Giver
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Giver` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/givers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Giver#findOne
         * @methodOf lbServices.Giver
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Giver` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/givers/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Giver#updateAll
         * @methodOf lbServices.Giver
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/givers/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Giver#deleteById
         * @methodOf lbServices.Giver
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Giver` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/givers/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Giver#count
         * @methodOf lbServices.Giver
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/givers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Giver#prototype$updateAttributes
         * @methodOf lbServices.Giver
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Giver` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/givers/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Giver#createChangeStream
         * @methodOf lbServices.Giver
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/givers/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Location.givers.findById() instead.
        "::findById::Location::givers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/locations/:id/givers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Location.givers.destroyById() instead.
        "::destroyById::Location::givers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/locations/:id/givers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Location.givers.updateById() instead.
        "::updateById::Location::givers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/locations/:id/givers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Location.givers.link() instead.
        "::link::Location::givers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/locations/:id/givers/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Location.givers.unlink() instead.
        "::unlink::Location::givers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/locations/:id/givers/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Location.givers.exists() instead.
        "::exists::Location::givers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/locations/:id/givers/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Location.givers() instead.
        "::get::Location::givers": {
          isArray: true,
          url: urlBase + "/locations/:id/givers",
          method: "GET"
        },

        // INTERNAL. Use Location.givers.create() instead.
        "::create::Location::givers": {
          url: urlBase + "/locations/:id/givers",
          method: "POST"
        },

        // INTERNAL. Use Location.givers.createMany() instead.
        "::createMany::Location::givers": {
          isArray: true,
          url: urlBase + "/locations/:id/givers",
          method: "POST"
        },

        // INTERNAL. Use Location.givers.destroyAll() instead.
        "::delete::Location::givers": {
          url: urlBase + "/locations/:id/givers",
          method: "DELETE"
        },

        // INTERNAL. Use Location.givers.count() instead.
        "::count::Location::givers": {
          url: urlBase + "/locations/:id/givers/count",
          method: "GET"
        },

        // INTERNAL. Use GiftEntry.giver() instead.
        "::get::GiftEntry::giver": {
          url: urlBase + "/giftEntries/:id/giver",
          method: "GET"
        },

        // INTERNAL. Use GiftEntry.giver.create() instead.
        "::create::GiftEntry::giver": {
          url: urlBase + "/giftEntries/:id/giver",
          method: "POST"
        },

        // INTERNAL. Use GiftEntry.giver.createMany() instead.
        "::createMany::GiftEntry::giver": {
          isArray: true,
          url: urlBase + "/giftEntries/:id/giver",
          method: "POST"
        },

        // INTERNAL. Use GiftEntry.giver.update() instead.
        "::update::GiftEntry::giver": {
          url: urlBase + "/giftEntries/:id/giver",
          method: "PUT"
        },

        // INTERNAL. Use GiftEntry.giver.destroy() instead.
        "::destroy::GiftEntry::giver": {
          url: urlBase + "/giftEntries/:id/giver",
          method: "DELETE"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Giver#updateOrCreate
         * @methodOf lbServices.Giver
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Giver` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Giver#update
         * @methodOf lbServices.Giver
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Giver#destroyById
         * @methodOf lbServices.Giver
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Giver` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Giver#removeById
         * @methodOf lbServices.Giver
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Giver` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Giver#modelName
    * @propertyOf lbServices.Giver
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Giver`.
    */
    R.modelName = "Giver";

    /**
     * @ngdoc object
     * @name lbServices.Giver.location
     * @header lbServices.Giver.location
     * @object
     * @description
     *
     * The object `Giver.location` groups methods
     * manipulating `Location` instances related to `Giver`.
     *
     * Call {@link lbServices.Giver#location Giver.location()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Giver#location
         * @methodOf lbServices.Giver
         *
         * @description
         *
         * Fetches hasOne relation location.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Location` object.)
         * </em>
         */
        R.location = function() {
          var TargetResource = $injector.get("Location");
          var action = TargetResource["::get::Giver::location"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Giver.location#create
         * @methodOf lbServices.Giver.location
         *
         * @description
         *
         * Creates a new instance in location of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Location` object.)
         * </em>
         */
        R.location.create = function() {
          var TargetResource = $injector.get("Location");
          var action = TargetResource["::create::Giver::location"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Giver.location#createMany
         * @methodOf lbServices.Giver.location
         *
         * @description
         *
         * Creates a new instance in location of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Location` object.)
         * </em>
         */
        R.location.createMany = function() {
          var TargetResource = $injector.get("Location");
          var action = TargetResource["::createMany::Giver::location"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Giver.location#destroy
         * @methodOf lbServices.Giver.location
         *
         * @description
         *
         * Deletes location of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.location.destroy = function() {
          var TargetResource = $injector.get("Location");
          var action = TargetResource["::destroy::Giver::location"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Giver.location#update
         * @methodOf lbServices.Giver.location
         *
         * @description
         *
         * Update location of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Location` object.)
         * </em>
         */
        R.location.update = function() {
          var TargetResource = $injector.get("Location");
          var action = TargetResource["::update::Giver::location"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Giver.giftEntries
     * @header lbServices.Giver.giftEntries
     * @object
     * @description
     *
     * The object `Giver.giftEntries` groups methods
     * manipulating `GiftEntry` instances related to `Giver`.
     *
     * Call {@link lbServices.Giver#giftEntries Giver.giftEntries()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Giver#giftEntries
         * @methodOf lbServices.Giver
         *
         * @description
         *
         * Queries giftEntries of Giver.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `GiftEntry` object.)
         * </em>
         */
        R.giftEntries = function() {
          var TargetResource = $injector.get("GiftEntry");
          var action = TargetResource["::get::Giver::giftEntries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Giver.giftEntries#count
         * @methodOf lbServices.Giver.giftEntries
         *
         * @description
         *
         * Counts giftEntries of Giver.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.giftEntries.count = function() {
          var TargetResource = $injector.get("GiftEntry");
          var action = TargetResource["::count::Giver::giftEntries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Giver.giftEntries#create
         * @methodOf lbServices.Giver.giftEntries
         *
         * @description
         *
         * Creates a new instance in giftEntries of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `GiftEntry` object.)
         * </em>
         */
        R.giftEntries.create = function() {
          var TargetResource = $injector.get("GiftEntry");
          var action = TargetResource["::create::Giver::giftEntries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Giver.giftEntries#createMany
         * @methodOf lbServices.Giver.giftEntries
         *
         * @description
         *
         * Creates a new instance in giftEntries of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `GiftEntry` object.)
         * </em>
         */
        R.giftEntries.createMany = function() {
          var TargetResource = $injector.get("GiftEntry");
          var action = TargetResource["::createMany::Giver::giftEntries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Giver.giftEntries#destroyAll
         * @methodOf lbServices.Giver.giftEntries
         *
         * @description
         *
         * Deletes all giftEntries of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.giftEntries.destroyAll = function() {
          var TargetResource = $injector.get("GiftEntry");
          var action = TargetResource["::delete::Giver::giftEntries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Giver.giftEntries#destroyById
         * @methodOf lbServices.Giver.giftEntries
         *
         * @description
         *
         * Delete a related item by id for giftEntries.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for giftEntries
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.giftEntries.destroyById = function() {
          var TargetResource = $injector.get("GiftEntry");
          var action = TargetResource["::destroyById::Giver::giftEntries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Giver.giftEntries#findById
         * @methodOf lbServices.Giver.giftEntries
         *
         * @description
         *
         * Find a related item by id for giftEntries.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for giftEntries
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `GiftEntry` object.)
         * </em>
         */
        R.giftEntries.findById = function() {
          var TargetResource = $injector.get("GiftEntry");
          var action = TargetResource["::findById::Giver::giftEntries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Giver.giftEntries#updateById
         * @methodOf lbServices.Giver.giftEntries
         *
         * @description
         *
         * Update a related item by id for giftEntries.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for giftEntries
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `GiftEntry` object.)
         * </em>
         */
        R.giftEntries.updateById = function() {
          var TargetResource = $injector.get("GiftEntry");
          var action = TargetResource["::updateById::Giver::giftEntries"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Receiver
 * @header lbServices.Receiver
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Receiver` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Receiver",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/receivers/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Receiver.location() instead.
        "prototype$__get__location": {
          url: urlBase + "/receivers/:id/location",
          method: "GET"
        },

        // INTERNAL. Use Receiver.location.create() instead.
        "prototype$__create__location": {
          url: urlBase + "/receivers/:id/location",
          method: "POST"
        },

        // INTERNAL. Use Receiver.location.update() instead.
        "prototype$__update__location": {
          url: urlBase + "/receivers/:id/location",
          method: "PUT"
        },

        // INTERNAL. Use Receiver.location.destroy() instead.
        "prototype$__destroy__location": {
          url: urlBase + "/receivers/:id/location",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Receiver#create
         * @methodOf lbServices.Receiver
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Receiver` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/receivers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Receiver#createMany
         * @methodOf lbServices.Receiver
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Receiver` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/receivers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Receiver#upsert
         * @methodOf lbServices.Receiver
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Receiver` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/receivers",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Receiver#exists
         * @methodOf lbServices.Receiver
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/receivers/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Receiver#findById
         * @methodOf lbServices.Receiver
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Receiver` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/receivers/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Receiver#find
         * @methodOf lbServices.Receiver
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Receiver` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/receivers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Receiver#findOne
         * @methodOf lbServices.Receiver
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Receiver` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/receivers/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Receiver#updateAll
         * @methodOf lbServices.Receiver
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/receivers/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Receiver#deleteById
         * @methodOf lbServices.Receiver
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Receiver` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/receivers/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Receiver#count
         * @methodOf lbServices.Receiver
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/receivers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Receiver#prototype$updateAttributes
         * @methodOf lbServices.Receiver
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Receiver` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/receivers/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Receiver#createChangeStream
         * @methodOf lbServices.Receiver
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/receivers/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Location.receivers.findById() instead.
        "::findById::Location::receivers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/locations/:id/receivers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Location.receivers.destroyById() instead.
        "::destroyById::Location::receivers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/locations/:id/receivers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Location.receivers.updateById() instead.
        "::updateById::Location::receivers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/locations/:id/receivers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Location.receivers.link() instead.
        "::link::Location::receivers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/locations/:id/receivers/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Location.receivers.unlink() instead.
        "::unlink::Location::receivers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/locations/:id/receivers/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Location.receivers.exists() instead.
        "::exists::Location::receivers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/locations/:id/receivers/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Location.receivers() instead.
        "::get::Location::receivers": {
          isArray: true,
          url: urlBase + "/locations/:id/receivers",
          method: "GET"
        },

        // INTERNAL. Use Location.receivers.create() instead.
        "::create::Location::receivers": {
          url: urlBase + "/locations/:id/receivers",
          method: "POST"
        },

        // INTERNAL. Use Location.receivers.createMany() instead.
        "::createMany::Location::receivers": {
          isArray: true,
          url: urlBase + "/locations/:id/receivers",
          method: "POST"
        },

        // INTERNAL. Use Location.receivers.destroyAll() instead.
        "::delete::Location::receivers": {
          url: urlBase + "/locations/:id/receivers",
          method: "DELETE"
        },

        // INTERNAL. Use Location.receivers.count() instead.
        "::count::Location::receivers": {
          url: urlBase + "/locations/:id/receivers/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Receiver#updateOrCreate
         * @methodOf lbServices.Receiver
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Receiver` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Receiver#update
         * @methodOf lbServices.Receiver
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Receiver#destroyById
         * @methodOf lbServices.Receiver
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Receiver` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Receiver#removeById
         * @methodOf lbServices.Receiver
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Receiver` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Receiver#modelName
    * @propertyOf lbServices.Receiver
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Receiver`.
    */
    R.modelName = "Receiver";

    /**
     * @ngdoc object
     * @name lbServices.Receiver.location
     * @header lbServices.Receiver.location
     * @object
     * @description
     *
     * The object `Receiver.location` groups methods
     * manipulating `Location` instances related to `Receiver`.
     *
     * Call {@link lbServices.Receiver#location Receiver.location()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Receiver#location
         * @methodOf lbServices.Receiver
         *
         * @description
         *
         * Fetches hasOne relation location.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Location` object.)
         * </em>
         */
        R.location = function() {
          var TargetResource = $injector.get("Location");
          var action = TargetResource["::get::Receiver::location"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Receiver.location#create
         * @methodOf lbServices.Receiver.location
         *
         * @description
         *
         * Creates a new instance in location of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Location` object.)
         * </em>
         */
        R.location.create = function() {
          var TargetResource = $injector.get("Location");
          var action = TargetResource["::create::Receiver::location"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Receiver.location#createMany
         * @methodOf lbServices.Receiver.location
         *
         * @description
         *
         * Creates a new instance in location of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Location` object.)
         * </em>
         */
        R.location.createMany = function() {
          var TargetResource = $injector.get("Location");
          var action = TargetResource["::createMany::Receiver::location"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Receiver.location#destroy
         * @methodOf lbServices.Receiver.location
         *
         * @description
         *
         * Deletes location of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.location.destroy = function() {
          var TargetResource = $injector.get("Location");
          var action = TargetResource["::destroy::Receiver::location"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Receiver.location#update
         * @methodOf lbServices.Receiver.location
         *
         * @description
         *
         * Update location of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Location` object.)
         * </em>
         */
        R.location.update = function() {
          var TargetResource = $injector.get("Location");
          var action = TargetResource["::update::Receiver::location"];
          return action.apply(R, arguments);
        };

    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.rememberMe = undefined;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      var key = propsPrefix + name;
      if (value == null) value = '';
      storage[key] = value;
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out non urlBase requests
          if (config.url.substr(0, urlBase.length) !== urlBase) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
