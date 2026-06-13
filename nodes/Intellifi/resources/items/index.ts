import type { INodeProperties } from 'n8n-workflow';

export const itemsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Items"
					]
				}
			},
			"options": [
				{
					"name": "Get Items",
					"value": "Get Items",
					"action": "Get all items",
					"description": "Get all items",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/items"
						}
					}
				},
				{
					"name": "Add Item",
					"value": "Add Item",
					"action": "Create item",
					"description": "Create item",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/items"
						}
					}
				},
				{
					"name": "Delete Item",
					"value": "Delete Item",
					"action": "Delete item",
					"description": "Delete item",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/items/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Item By ID",
					"value": "Get Item By ID",
					"action": "Get item",
					"description": "Get item",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/items/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Update Item",
					"value": "Update Item",
					"action": "Update existing item",
					"description": "Update existing item",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/items/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /items",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Items"
					],
					"operation": [
						"Get Items"
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
						"Items"
					],
					"operation": [
						"Get Items"
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
						"Items"
					],
					"operation": [
						"Get Items"
					]
				}
			}
		},
		{
			"displayName": "After Code",
			"name": "after_code",
			"description": "Limits directly on `code_hex`. Marks the start of a range, optionally use `before_code` to set the end. Result output excludes the given `code_hex` value.",
			"default": "e20000000000000000000000",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "after_code",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Items"
					],
					"operation": [
						"Get Items"
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
						"Items"
					],
					"operation": [
						"Get Items"
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
						"Items"
					],
					"operation": [
						"Get Items"
					]
				}
			}
		},
		{
			"displayName": "Before Code",
			"name": "before_code",
			"description": "Limits directly on `code_hex`. Marks the end of a range, optionally use `after_code` to set the start. Result output excludes the given `code_hex` value.",
			"default": "e20000000000000000001fff",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "before_code",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Items"
					],
					"operation": [
						"Get Items"
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
						"Items"
					],
					"operation": [
						"Get Items"
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
						"Items"
					],
					"operation": [
						"Get Items"
					]
				}
			}
		},
		{
			"displayName": "From Code",
			"name": "from_code",
			"description": "Limits on `code_hex`. Marks the start of a range, optionally use `until_code` to set the end. Result output includes the given `code_hex` value.",
			"default": "e20000000000000000000000",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "from_code",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Items"
					],
					"operation": [
						"Get Items"
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
						"Items"
					],
					"operation": [
						"Get Items"
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
						"Items"
					],
					"operation": [
						"Get Items"
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
						"Items"
					],
					"operation": [
						"Get Items"
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
						"Items"
					],
					"operation": [
						"Get Items"
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
						"Items"
					],
					"operation": [
						"Get Items"
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
						"Items"
					],
					"operation": [
						"Get Items"
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
						"Items"
					],
					"operation": [
						"Get Items"
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
						"Items"
					],
					"operation": [
						"Get Items"
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
						"Items"
					],
					"operation": [
						"Get Items"
					]
				}
			}
		},
		{
			"displayName": "Until Code",
			"name": "until_code",
			"description": "Limits on `code_hex`. Marks the end of a range, optionally use `from_code` to set the start. Result output includes the given `code_hex` value.",
			"default": "e20000000000000000001ffff",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "until_code",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Items"
					],
					"operation": [
						"Get Items"
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
						"Items"
					],
					"operation": [
						"Get Items"
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
						"Items"
					],
					"operation": [
						"Get Items"
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
						"Items"
					],
					"operation": [
						"Get Items"
					]
				}
			}
		},
		{
			"displayName": "Code Hex",
			"name": "code_hex",
			"description": "Filter based on the hexadecimal string representation of the item. Supports wildcards: `*`.",
			"default": "deadbeef",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "code_hex",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Items"
					],
					"operation": [
						"Get Items"
					]
				}
			}
		},
		{
			"displayName": "Is Present",
			"name": "is_present",
			"description": "Only show items which are present of not.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "is_present",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Items"
					],
					"operation": [
						"Get Items"
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
						"Items"
					],
					"operation": [
						"Get Items"
					]
				}
			}
		},
		{
			"displayName": "Location",
			"name": "location",
			"description": "Filter based on the location",
			"default": "5b7d6cbd7503c445552a1664",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "location",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Items"
					],
					"operation": [
						"Get Items"
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
						"Items"
					],
					"operation": [
						"Get Items"
					]
				}
			}
		},
		{
			"displayName": "Move Count",
			"name": "move_count",
			"description": "Filter based on move count",
			"default": 5342,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "move_count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Items"
					],
					"operation": [
						"Get Items"
					]
				}
			}
		},
		{
			"displayName": "Protocol",
			"name": "protocol",
			"description": "Filter based on the detected protocol of an item.",
			"default": "epcgen2",
			"type": "options",
			"options": [
				{
					"name": "Altbeacon",
					"value": "altbeacon"
				},
				{
					"name": "Uniwear",
					"value": "uniwear"
				},
				{
					"name": "Nfc",
					"value": "nfc"
				},
				{
					"name": "Generic",
					"value": "generic"
				},
				{
					"name": "Eddystone",
					"value": "eddystone"
				},
				{
					"name": "Epcgen 2",
					"value": "epcgen2"
				},
				{
					"name": "Ibeacon",
					"value": "ibeacon"
				},
				{
					"name": "Nanoble",
					"value": "nanoble"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "protocol",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Items"
					],
					"operation": [
						"Get Items"
					]
				}
			}
		},
		{
			"displayName": "Sets",
			"name": "sets",
			"description": "Filter based on the set the resource is in.",
			"default": "5b8d0b717503c445552a1865",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sets",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Items"
					],
					"operation": [
						"Get Items"
					]
				}
			}
		},
		{
			"displayName": "Technology",
			"name": "technology",
			"description": "Filter based on the detected technology of an item.",
			"default": "rfid",
			"type": "options",
			"options": [
				{
					"name": "Bluetooth",
					"value": "bluetooth"
				},
				{
					"name": "Optical",
					"value": "optical"
				},
				{
					"name": "Rfid",
					"value": "rfid"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "technology",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Items"
					],
					"operation": [
						"Get Items"
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
						"Items"
					],
					"operation": [
						"Get Items"
					]
				}
			}
		},
		{
			"displayName": "Time Last Present",
			"name": "time_last_present",
			"description": "Filter based on the time last present",
			"default": "2018-09-03T10:23:46.596Z",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "time_last_present",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Items"
					],
					"operation": [
						"Get Items"
					]
				}
			}
		},
		{
			"displayName": "Time Moved",
			"name": "time_moved",
			"description": "Filter based on time last moved",
			"default": "2018-08-30T09:51:59.737Z",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "time_moved",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Items"
					],
					"operation": [
						"Get Items"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"description": "Filter based on the type of an item.",
			"default": "tag",
			"type": "options",
			"options": [
				{
					"name": "Barcode",
					"value": "barcode"
				},
				{
					"name": "Bluetitan",
					"value": "bluetitan"
				},
				{
					"name": "Gbtag",
					"value": "gbtag"
				},
				{
					"name": "Relay",
					"value": "relay"
				},
				{
					"name": "Smarttag",
					"value": "smarttag"
				},
				{
					"name": "Tag",
					"value": "tag"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Items"
					],
					"operation": [
						"Get Items"
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
						"Items"
					],
					"operation": [
						"Get Items"
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
						"Items"
					],
					"operation": [
						"Get Items"
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
						"Items"
					],
					"operation": [
						"Get Items"
					]
				}
			}
		},
		{
			"displayName": "POST /items",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Items"
					],
					"operation": [
						"Add Item"
					]
				}
			}
		},
		{
			"displayName": "POST /items<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Items"
					],
					"operation": [
						"Add Item"
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
						"Items"
					],
					"operation": [
						"Add Item"
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
						"Items"
					],
					"operation": [
						"Add Item"
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
						"Items"
					],
					"operation": [
						"Add Item"
					]
				}
			}
		},
		{
			"displayName": "DELETE /items/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Items"
					],
					"operation": [
						"Delete Item"
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
						"Items"
					],
					"operation": [
						"Delete Item"
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
						"Items"
					],
					"operation": [
						"Delete Item"
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
						"Items"
					],
					"operation": [
						"Delete Item"
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
						"Items"
					],
					"operation": [
						"Delete Item"
					]
				}
			}
		},
		{
			"displayName": "GET /items/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Items"
					],
					"operation": [
						"Get Item By ID"
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
						"Items"
					],
					"operation": [
						"Get Item By ID"
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
						"Items"
					],
					"operation": [
						"Get Item By ID"
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
						"Items"
					],
					"operation": [
						"Get Item By ID"
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
						"Items"
					],
					"operation": [
						"Get Item By ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /items/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Items"
					],
					"operation": [
						"Update Item"
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
						"Items"
					],
					"operation": [
						"Update Item"
					]
				}
			}
		},
		{
			"displayName": "Config Request",
			"name": "config_request",
			"type": "json",
			"default": "{\n  \"foo\": \"bar\"\n}",
			"description": "Object containing the new configuration. This will be applied automatically when the values are valid.",
			"routing": {
				"send": {
					"property": "config_request",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Items"
					],
					"operation": [
						"Update Item"
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
						"Items"
					],
					"operation": [
						"Update Item"
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
						"Items"
					],
					"operation": [
						"Update Item"
					]
				}
			}
		},
		{
			"displayName": "Location Request",
			"name": "location_request",
			"type": "string",
			"default": "5b7d6cbd7503c445552a1664",
			"description": "Instruction for the location engine to forcibly localize the item at the specified location id as soon as possible. Cleared automatically.",
			"routing": {
				"send": {
					"property": "location_request",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Items"
					],
					"operation": [
						"Update Item"
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
						"Items"
					],
					"operation": [
						"Update Item"
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
						"Items"
					],
					"operation": [
						"Update Item"
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
						"Items"
					],
					"operation": [
						"Update Item"
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
						"Items"
					],
					"operation": [
						"Update Item"
					]
				}
			}
		},
];
