import type { INodeProperties } from 'n8n-workflow';

export const locationsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Locations"
					]
				}
			},
			"options": [
				{
					"name": "Get Locations",
					"value": "Get Locations",
					"action": "Get all locations",
					"description": "Get all locations",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/locations"
						}
					}
				},
				{
					"name": "Add Location",
					"value": "Add Location",
					"action": "Create location",
					"description": "Create location",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/locations"
						}
					}
				},
				{
					"name": "Delete Location",
					"value": "Delete Location",
					"action": "Delete location",
					"description": "Delete location",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/locations/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Location By ID",
					"value": "Get Location By ID",
					"action": "Get location",
					"description": "Get location",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/locations/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update Location",
					"value": "Update Location",
					"action": "Update existing location",
					"description": "Update existing location",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/locations/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /locations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Locations"
					],
					"operation": [
						"Get Locations"
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
						"Locations"
					],
					"operation": [
						"Get Locations"
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
						"Locations"
					],
					"operation": [
						"Get Locations"
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
						"Locations"
					],
					"operation": [
						"Get Locations"
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
						"Locations"
					],
					"operation": [
						"Get Locations"
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
						"Locations"
					],
					"operation": [
						"Get Locations"
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
						"Locations"
					],
					"operation": [
						"Get Locations"
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
						"Locations"
					],
					"operation": [
						"Get Locations"
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
						"Locations"
					],
					"operation": [
						"Get Locations"
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
						"Locations"
					],
					"operation": [
						"Get Locations"
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
						"Locations"
					],
					"operation": [
						"Get Locations"
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
						"Locations"
					],
					"operation": [
						"Get Locations"
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
						"Locations"
					],
					"operation": [
						"Get Locations"
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
						"Locations"
					],
					"operation": [
						"Get Locations"
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
						"Locations"
					],
					"operation": [
						"Get Locations"
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
						"Locations"
					],
					"operation": [
						"Get Locations"
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
						"Locations"
					],
					"operation": [
						"Get Locations"
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
						"Locations"
					],
					"operation": [
						"Get Locations"
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
						"Locations"
					],
					"operation": [
						"Get Locations"
					]
				}
			}
		},
		{
			"displayName": "Label",
			"name": "label",
			"description": "Filter based on the label value. Supports wildcards: `*`",
			"default": "*foo*",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "label",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Locations"
					],
					"operation": [
						"Get Locations"
					]
				}
			}
		},
		{
			"displayName": "Metadata",
			"name": "metadata",
			"description": "Filter based on metadata. Does a partial match on any value in the metadata object. It is also possible to do an exact/wildcard match on specific properties, e.g. `metadata.foo=bar`",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "metadata",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Locations"
					],
					"operation": [
						"Get Locations"
					]
				}
			}
		},
		{
			"displayName": "Text",
			"name": "text",
			"description": "Filter based on a full text search. Searched properties depend on the resource type. Matches on any of the given words. Supports quote (exact words) and minus (exclude) operators.",
			"default": "penguin",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "text",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Locations"
					],
					"operation": [
						"Get Locations"
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
						"Locations"
					],
					"operation": [
						"Get Locations"
					]
				}
			}
		},
		{
			"displayName": "X API Key (Header)",
			"name": "security_headerapikey",
			"type": "string",
			"default": "",
			"description": "Applications are required to provide an API key with every HTTP request\nto the Web API.\n",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Api-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Locations"
					],
					"operation": [
						"Get Locations"
					]
				}
			}
		},
		{
			"displayName": "Query API Key API Key",
			"name": "security_queryapikey",
			"type": "string",
			"default": "",
			"description": "Applications are required to provide an API key with every HTTP request\nto the Web API.\n",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Locations"
					],
					"operation": [
						"Get Locations"
					]
				}
			}
		},
		{
			"displayName": "POST /locations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Locations"
					],
					"operation": [
						"Add Location"
					]
				}
			}
		},
		{
			"displayName": "Custom",
			"name": "custom",
			"type": "string",
			"default": {
				"foo": "bar"
			},
			"description": "The `custom` value is only for your custom references, you may use it to save additional attributes. The custom value is not used in any other place. This field may contain any datatype that you like: null (default), string, integer, boolean, object etc...",
			"routing": {
				"send": {
					"property": "custom",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Locations"
					],
					"operation": [
						"Add Location"
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
						"Locations"
					],
					"operation": [
						"Add Location"
					]
				}
			}
		},
		{
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "Foo Bar",
			"description": "A name or a label for this resource. This is used in the user interface, may be empty.",
			"routing": {
				"send": {
					"property": "label",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Locations"
					],
					"operation": [
						"Add Location"
					]
				}
			}
		},
		{
			"displayName": "Metadata",
			"name": "metadata",
			"type": "json",
			"default": "{\n  \"foo\": \"bar\"\n}",
			"description": "Object of searchable metadata for this resource. Can be freely used to store metadata properties.",
			"routing": {
				"send": {
					"property": "metadata",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Locations"
					],
					"operation": [
						"Add Location"
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
						"Locations"
					],
					"operation": [
						"Add Location"
					]
				}
			}
		},
		{
			"displayName": "Time Updated",
			"name": "time_updated",
			"type": "string",
			"default": "2018-08-30T09:51:59.737Z",
			"description": "[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was updated.",
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
						"Locations"
					],
					"operation": [
						"Add Location"
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
						"Locations"
					],
					"operation": [
						"Add Location"
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
						"Locations"
					],
					"operation": [
						"Add Location"
					]
				}
			}
		},
		{
			"displayName": "X API Key (Header)",
			"name": "security_headerapikey",
			"type": "string",
			"default": "",
			"description": "Applications are required to provide an API key with every HTTP request\nto the Web API.\n",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Api-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Locations"
					],
					"operation": [
						"Add Location"
					]
				}
			}
		},
		{
			"displayName": "Query API Key API Key",
			"name": "security_queryapikey",
			"type": "string",
			"default": "",
			"description": "Applications are required to provide an API key with every HTTP request\nto the Web API.\n",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Locations"
					],
					"operation": [
						"Add Location"
					]
				}
			}
		},
		{
			"displayName": "DELETE /locations/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Locations"
					],
					"operation": [
						"Delete Location"
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
						"Locations"
					],
					"operation": [
						"Delete Location"
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
						"Locations"
					],
					"operation": [
						"Delete Location"
					]
				}
			}
		},
		{
			"displayName": "X API Key (Header)",
			"name": "security_headerapikey",
			"type": "string",
			"default": "",
			"description": "Applications are required to provide an API key with every HTTP request\nto the Web API.\n",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Api-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Locations"
					],
					"operation": [
						"Delete Location"
					]
				}
			}
		},
		{
			"displayName": "Query API Key API Key",
			"name": "security_queryapikey",
			"type": "string",
			"default": "",
			"description": "Applications are required to provide an API key with every HTTP request\nto the Web API.\n",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Locations"
					],
					"operation": [
						"Delete Location"
					]
				}
			}
		},
		{
			"displayName": "GET /locations/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Locations"
					],
					"operation": [
						"Get Location By ID"
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
						"Locations"
					],
					"operation": [
						"Get Location By ID"
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
						"Locations"
					],
					"operation": [
						"Get Location By ID"
					]
				}
			}
		},
		{
			"displayName": "X API Key (Header)",
			"name": "security_headerapikey",
			"type": "string",
			"default": "",
			"description": "Applications are required to provide an API key with every HTTP request\nto the Web API.\n",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Api-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Locations"
					],
					"operation": [
						"Get Location By ID"
					]
				}
			}
		},
		{
			"displayName": "Query API Key API Key",
			"name": "security_queryapikey",
			"type": "string",
			"default": "",
			"description": "Applications are required to provide an API key with every HTTP request\nto the Web API.\n",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Locations"
					],
					"operation": [
						"Get Location By ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /locations/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Locations"
					],
					"operation": [
						"Update Location"
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
						"Locations"
					],
					"operation": [
						"Update Location"
					]
				}
			}
		},
		{
			"displayName": "Custom",
			"name": "custom",
			"type": "string",
			"default": {
				"foo": "bar"
			},
			"description": "The `custom` value is only for your custom references, you may use it to save additional attributes. The custom value is not used in any other place. This field may contain any datatype that you like: null (default), string, integer, boolean, object etc...",
			"routing": {
				"send": {
					"property": "custom",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Locations"
					],
					"operation": [
						"Update Location"
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
						"Locations"
					],
					"operation": [
						"Update Location"
					]
				}
			}
		},
		{
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "Foo Bar",
			"description": "A name or a label for this resource. This is used in the user interface, may be empty.",
			"routing": {
				"send": {
					"property": "label",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Locations"
					],
					"operation": [
						"Update Location"
					]
				}
			}
		},
		{
			"displayName": "Metadata",
			"name": "metadata",
			"type": "json",
			"default": "{\n  \"foo\": \"bar\"\n}",
			"description": "Object of searchable metadata for this resource. Can be freely used to store metadata properties.",
			"routing": {
				"send": {
					"property": "metadata",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Locations"
					],
					"operation": [
						"Update Location"
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
						"Locations"
					],
					"operation": [
						"Update Location"
					]
				}
			}
		},
		{
			"displayName": "Time Updated",
			"name": "time_updated",
			"type": "string",
			"default": "2018-08-30T09:51:59.737Z",
			"description": "[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was updated.",
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
						"Locations"
					],
					"operation": [
						"Update Location"
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
						"Locations"
					],
					"operation": [
						"Update Location"
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
						"Locations"
					],
					"operation": [
						"Update Location"
					]
				}
			}
		},
		{
			"displayName": "X API Key (Header)",
			"name": "security_headerapikey",
			"type": "string",
			"default": "",
			"description": "Applications are required to provide an API key with every HTTP request\nto the Web API.\n",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Api-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Locations"
					],
					"operation": [
						"Update Location"
					]
				}
			}
		},
		{
			"displayName": "Query API Key API Key",
			"name": "security_queryapikey",
			"type": "string",
			"default": "",
			"description": "Applications are required to provide an API key with every HTTP request\nto the Web API.\n",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Locations"
					],
					"operation": [
						"Update Location"
					]
				}
			}
		},
];
