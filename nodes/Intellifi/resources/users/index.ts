import type { INodeProperties } from 'n8n-workflow';

export const usersDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					]
				}
			},
			"options": [
				{
					"name": "Get Users",
					"value": "Get Users",
					"action": "Get all users",
					"description": "Can only be used by an **administrative** user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users"
						}
					}
				},
				{
					"name": "Add User",
					"value": "Add User",
					"action": "Create user",
					"description": "Can only be used by an **administrative** user.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users"
						}
					}
				},
				{
					"name": "Delete User",
					"value": "Delete User",
					"action": "Delete user",
					"description": "Can only be used by an **administrative** user.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get User By ID",
					"value": "Get User By ID",
					"action": "Get user",
					"description": "Can only be used by an **administrative** user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update User",
					"value": "Update User",
					"action": "Update existing user",
					"description": "Can only be used by an **administrative** user.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/users/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Users"
					]
				}
			}
		},
		{
			"displayName": "After",
			"name": "after",
			"description": "Limits on `time_created`, Marks the start of a range, optionally use `before` to set the end. Result output excludes the given timestamp.",
			"default": "2016-01-27T08:38:55.255Z",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "after",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Users"
					]
				}
			}
		},
		{
			"displayName": "After ID",
			"name": "after_id",
			"description": "Limits directly on `id`. Marks the start of a range, optionally use `before_id` to set the end. Result output excludes the given `id` value. Please note that `id` is in chronological order.",
			"default": "56a88364e783152127d15340",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "after_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Users"
					]
				}
			}
		},
		{
			"displayName": "Before",
			"name": "before",
			"description": "Limits on `time_created`. Marks the end of a range, optionally use `after` to set the start. Result output excludes the given timestamp.",
			"default": "2016-01-27T08:38:55.255Z",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "before",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Users"
					]
				}
			}
		},
		{
			"displayName": "Before ID",
			"name": "before_id",
			"description": "Limits directly on `id`. Marks the end of a range, optionally use `after_id` to set the start. Result output excludes the given `id` value. Please note that `id` is in chronological order.",
			"default": "56a88364e783152127d15340",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "before_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Users"
					]
				}
			}
		},
		{
			"displayName": "From",
			"name": "from",
			"description": "Limits on `time_created`. Marks the start of a range, optionally use `until` to set the end. Result output includes the given timestamp.",
			"default": "2016-01-27T08:38:55.255Z",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "from",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Users"
					]
				}
			}
		},
		{
			"displayName": "From ID",
			"name": "from_id",
			"description": "Limits on `id`. Marks the start of a range, optionally use `until_id` to set the end. Result output includes the given `id` value. Please note that `id` is in chronological order.",
			"default": "56a88364e783152127d15340",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "from_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Users"
					]
				}
			}
		},
		{
			"displayName": "ID Only",
			"name": "id_only",
			"description": "Removes `url` fields from output and shows `_id` instead of `_url` in references.",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "id_only",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Users"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Sets the maximum number of returned resources. You may increase this number to large values, keep in mind that query times could become large. We advise you to use the pagination feature whenever you can.",
			"default": 5,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Users"
					]
				}
			}
		},
		{
			"displayName": "Populate",
			"name": "populate",
			"description": "Expand a reference into the actual resource (lookup). You may add multiple fields by giving a comma separated value.",
			"default": "location,item",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "populate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Users"
					]
				}
			}
		},
		{
			"displayName": "Results Only",
			"name": "results_only",
			"description": "Removes response envelope with information about query, only sends back a JSON array with the applicable resources.",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "results_only",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Users"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "select",
			"description": "Select which properties should be returned. You may add multiple fields by giving a comma separated value. Select can also be used together with populate: Specify the resource first, then a period(.) followed by the field.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Users"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Allows you to sort on on or more fields in the resource. You may append a minus sign (`-`) to request reverse order (new to old).",
			"default": "-move_count,technology",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Users"
					]
				}
			}
		},
		{
			"displayName": "Until",
			"name": "until",
			"description": "Limits on `time_created`. Marks the end of a range, optionally use `from` to set the start. Result output includes the given timestamp.",
			"default": "2016-01-27T08:38:55.255Z",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "until",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Users"
					]
				}
			}
		},
		{
			"displayName": "Until ID",
			"name": "until_id",
			"description": "Limits on `id`. Marks the end of a range, optionally use `from_id` to set the start. Result output includes the given `id` value. Please note that `id` is in chronological order.",
			"default": "56a88364e783152127d15340",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "until_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Users"
					]
				}
			}
		},
		{
			"displayName": "Timeout S",
			"name": "timeout_s",
			"description": "Overrides the default query timeout (in seconds). A value of 0 means unlimited. IMPORTANT: using high timeouts in production code is strongly discouraged as it may lead to stability issues.",
			"default": 60,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "timeout_s",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Users"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"description": "Unique identifier",
			"default": "5b8d0b717503c445552a1865",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Users"
					]
				}
			}
		},
		{
			"displayName": "Time Created",
			"name": "time_created",
			"description": "Filter on the time the resource was created.",
			"default": "2018-08-30T09:51:59.737Z",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "time_created",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Users"
					]
				}
			}
		},
		{
			"displayName": "Time Updated",
			"name": "time_updated",
			"description": "Filter on the time the resource was last updated",
			"default": "2018-08-30T09:51:59.737Z",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "time_updated",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Users"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"description": "Filter on the email address.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Users"
					]
				}
			}
		},
		{
			"displayName": "First Name",
			"name": "first_name",
			"description": "Filter on the first name.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "first_name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Users"
					]
				}
			}
		},
		{
			"displayName": "Last Name",
			"name": "last_name",
			"description": "Filter on the last name.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "last_name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Users"
					]
				}
			}
		},
		{
			"displayName": "Is Admin",
			"name": "is_admin",
			"description": "Filter on the administrator status.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "is_admin",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Users"
					]
				}
			}
		},
		{
			"displayName": "Is Locked",
			"name": "is_locked",
			"description": "Filter on the locked status.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "is_locked",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Users"
					]
				}
			}
		},
		{
			"displayName": "Cookie Sid API Key",
			"name": "security_cookiesid",
			"type": "string",
			"default": "",
			"description": "This [session cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)\nwill be set after a successful graphical front-end login into the Brain.\nAuthentication via this method is particularly useful for using the API manually via the\n'[tryitout](./tryitout)' tool or by browsing the API using some JSON viewer browser extension.\nA [same-origin policy](https://en.wikipedia.org/wiki/Same-origin_policy) is enforced for cookie authentication.\nTherefore applications accessing the API outside of the Brain, are not\nallowed to be authenticated via this cookie.\n\nSome endpoints, mainly `users` and `keys` can only be used when\nauthenticated via an administrative account using a Cookie. This means\nthat these endpoints can only be used when logged in into the Graphical\nfront-end of the Brain.\n",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Cookie": "={{ 'brain.sid=' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Users"
					]
				}
			}
		},
		{
			"displayName": "POST /users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Add User"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "user@intellifi.nl",
			"description": "Email address",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Add User"
					]
				}
			}
		},
		{
			"displayName": "First Name",
			"name": "first_name",
			"type": "string",
			"default": "Foo",
			"description": "First name",
			"routing": {
				"send": {
					"property": "first_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Add User"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "5b7d6cbd7503c445552a1664",
			"description": "Unique identifier for resource.",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Add User"
					]
				}
			}
		},
		{
			"displayName": "Is Admin",
			"name": "is_admin",
			"type": "boolean",
			"default": true,
			"description": "Whether or not this is an administrator.",
			"routing": {
				"send": {
					"property": "is_admin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Add User"
					]
				}
			}
		},
		{
			"displayName": "Is Locked",
			"name": "is_locked",
			"type": "boolean",
			"default": true,
			"description": "Whether or not this user is locked and can't change the password.",
			"routing": {
				"send": {
					"property": "is_locked",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Add User"
					]
				}
			}
		},
		{
			"displayName": "Last Name",
			"name": "last_name",
			"type": "string",
			"default": "Bar",
			"description": "Last name",
			"routing": {
				"send": {
					"property": "last_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Add User"
					]
				}
			}
		},
		{
			"displayName": "Password",
			"name": "password",
			"type": "string",
			"default": "password1",
			"description": "Password of the user",
			"routing": {
				"send": {
					"property": "password",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Add User"
					]
				}
			}
		},
		{
			"displayName": "Time Created",
			"name": "time_created",
			"type": "string",
			"default": "2018-08-30T09:51:59.737Z",
			"description": "[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was created.",
			"routing": {
				"send": {
					"property": "time_created",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Add User"
					]
				}
			}
		},
		{
			"displayName": "Time Updated",
			"name": "time_updated",
			"type": "string",
			"default": "2018-08-30T09:51:59.737Z",
			"description": "[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was created.",
			"routing": {
				"send": {
					"property": "time_updated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Add User"
					]
				}
			}
		},
		{
			"displayName": "URL",
			"name": "url",
			"type": "string",
			"default": "https://brain.intellifi.nl/api/foobar",
			"description": "Url to the individual resource.",
			"routing": {
				"send": {
					"property": "url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Add User"
					]
				}
			}
		},
		{
			"displayName": "Cookie Sid API Key",
			"name": "security_cookiesid",
			"type": "string",
			"default": "",
			"description": "This [session cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)\nwill be set after a successful graphical front-end login into the Brain.\nAuthentication via this method is particularly useful for using the API manually via the\n'[tryitout](./tryitout)' tool or by browsing the API using some JSON viewer browser extension.\nA [same-origin policy](https://en.wikipedia.org/wiki/Same-origin_policy) is enforced for cookie authentication.\nTherefore applications accessing the API outside of the Brain, are not\nallowed to be authenticated via this cookie.\n\nSome endpoints, mainly `users` and `keys` can only be used when\nauthenticated via an administrative account using a Cookie. This means\nthat these endpoints can only be used when logged in into the Graphical\nfront-end of the Brain.\n",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Cookie": "={{ 'brain.sid=' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Add User"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Delete User"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Unique identifier",
			"default": "5b8d0b717503c445552a1865",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Delete User"
					]
				}
			}
		},
		{
			"displayName": "Cookie Sid API Key",
			"name": "security_cookiesid",
			"type": "string",
			"default": "",
			"description": "This [session cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)\nwill be set after a successful graphical front-end login into the Brain.\nAuthentication via this method is particularly useful for using the API manually via the\n'[tryitout](./tryitout)' tool or by browsing the API using some JSON viewer browser extension.\nA [same-origin policy](https://en.wikipedia.org/wiki/Same-origin_policy) is enforced for cookie authentication.\nTherefore applications accessing the API outside of the Brain, are not\nallowed to be authenticated via this cookie.\n\nSome endpoints, mainly `users` and `keys` can only be used when\nauthenticated via an administrative account using a Cookie. This means\nthat these endpoints can only be used when logged in into the Graphical\nfront-end of the Brain.\n",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Cookie": "={{ 'brain.sid=' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Delete User"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get User By ID"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Unique identifier",
			"default": "5b8d0b717503c445552a1865",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get User By ID"
					]
				}
			}
		},
		{
			"displayName": "Cookie Sid API Key",
			"name": "security_cookiesid",
			"type": "string",
			"default": "",
			"description": "This [session cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)\nwill be set after a successful graphical front-end login into the Brain.\nAuthentication via this method is particularly useful for using the API manually via the\n'[tryitout](./tryitout)' tool or by browsing the API using some JSON viewer browser extension.\nA [same-origin policy](https://en.wikipedia.org/wiki/Same-origin_policy) is enforced for cookie authentication.\nTherefore applications accessing the API outside of the Brain, are not\nallowed to be authenticated via this cookie.\n\nSome endpoints, mainly `users` and `keys` can only be used when\nauthenticated via an administrative account using a Cookie. This means\nthat these endpoints can only be used when logged in into the Graphical\nfront-end of the Brain.\n",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Cookie": "={{ 'brain.sid=' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get User By ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Update User"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Unique identifier",
			"default": "5b8d0b717503c445552a1865",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Update User"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "user@intellifi.nl",
			"description": "Email address",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Update User"
					]
				}
			}
		},
		{
			"displayName": "First Name",
			"name": "first_name",
			"type": "string",
			"default": "Foo",
			"description": "First name",
			"routing": {
				"send": {
					"property": "first_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Update User"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "5b7d6cbd7503c445552a1664",
			"description": "Unique identifier for resource.",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Update User"
					]
				}
			}
		},
		{
			"displayName": "Is Admin",
			"name": "is_admin",
			"type": "boolean",
			"default": true,
			"description": "Whether or not this is an administrator.",
			"routing": {
				"send": {
					"property": "is_admin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Update User"
					]
				}
			}
		},
		{
			"displayName": "Is Locked",
			"name": "is_locked",
			"type": "boolean",
			"default": true,
			"description": "Whether or not this user is locked and can't change the password.",
			"routing": {
				"send": {
					"property": "is_locked",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Update User"
					]
				}
			}
		},
		{
			"displayName": "Last Name",
			"name": "last_name",
			"type": "string",
			"default": "Bar",
			"description": "Last name",
			"routing": {
				"send": {
					"property": "last_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Update User"
					]
				}
			}
		},
		{
			"displayName": "Password",
			"name": "password",
			"type": "string",
			"default": "password1",
			"description": "Password of the user",
			"routing": {
				"send": {
					"property": "password",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Update User"
					]
				}
			}
		},
		{
			"displayName": "Time Created",
			"name": "time_created",
			"type": "string",
			"default": "2018-08-30T09:51:59.737Z",
			"description": "[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was created.",
			"routing": {
				"send": {
					"property": "time_created",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Update User"
					]
				}
			}
		},
		{
			"displayName": "Time Updated",
			"name": "time_updated",
			"type": "string",
			"default": "2018-08-30T09:51:59.737Z",
			"description": "[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was created.",
			"routing": {
				"send": {
					"property": "time_updated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Update User"
					]
				}
			}
		},
		{
			"displayName": "URL",
			"name": "url",
			"type": "string",
			"default": "https://brain.intellifi.nl/api/foobar",
			"description": "Url to the individual resource.",
			"routing": {
				"send": {
					"property": "url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Update User"
					]
				}
			}
		},
		{
			"displayName": "Cookie Sid API Key",
			"name": "security_cookiesid",
			"type": "string",
			"default": "",
			"description": "This [session cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)\nwill be set after a successful graphical front-end login into the Brain.\nAuthentication via this method is particularly useful for using the API manually via the\n'[tryitout](./tryitout)' tool or by browsing the API using some JSON viewer browser extension.\nA [same-origin policy](https://en.wikipedia.org/wiki/Same-origin_policy) is enforced for cookie authentication.\nTherefore applications accessing the API outside of the Brain, are not\nallowed to be authenticated via this cookie.\n\nSome endpoints, mainly `users` and `keys` can only be used when\nauthenticated via an administrative account using a Cookie. This means\nthat these endpoints can only be used when logged in into the Graphical\nfront-end of the Brain.\n",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Cookie": "={{ 'brain.sid=' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Update User"
					]
				}
			}
		},
];
