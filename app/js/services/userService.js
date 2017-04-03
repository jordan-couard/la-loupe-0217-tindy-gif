angular.module('app')
    .service('UserService', function($http) {
        return {
            getAll: function() {
                return $http.get('/users');
            },
            getOne: function(id) {
                return $http.get('/users/' + id);
            },
            copyUpdate: function(id, gifId) {
                console.log(id, gifId);
                return $http.get('/users/copy', {
                    params: {
                        user: id,
                        gif: gifId
                    }
                });
            },
            update: function(id, user) {
                return $http.put('/users/' + id, user);
            },
            delete: function(id) {
                return $http.delete('/users/' + id);
            }
        };
    });
