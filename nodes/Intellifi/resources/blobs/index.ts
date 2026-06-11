import type { INodeProperties } from 'n8n-workflow';

export const blobsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Blobs"
					]
				}
			},
			"options": [
				{
					"name": "Get Blobs",
					"value": "Get Blobs",
					"action": "Get all binary large objects (blob)",
					"description": "Get all binary large objects (blob)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/blobs"
						}
					}
				},
				{
					"name": "Add Blob",
					"value": "Add Blob",
					"action": "Create binary large object (blob) metadata",
					"description": "Create binary large object (blob) metadata",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/blobs"
						}
					}
				},
				{
					"name": "Delete Blob",
					"value": "Delete Blob",
					"action": "Delete binary large object (blob)",
					"description": "Delete binary large object (blob)",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/blobs/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Blob Metadata By ID",
					"value": "Get Blob Metadata By ID",
					"action": "Get binary large object (blob)",
					"description": "Get binary large object (blob)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/blobs/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Blob By ID",
					"value": "Get Blob By ID",
					"action": "Download a binary large object (blob)",
					"description": "Download a binary large object (blob)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/blobs/{{$parameter[\"id\"]}}/download/{{$parameter[\"filename\"]}}"
						}
					}
				},
				{
					"name": "Upload Blob By ID",
					"value": "Upload Blob By ID",
					"action": "Create binary large object (blob)",
					"description": "Create binary large object (blob)",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/blobs/{{$parameter[\"id\"]}}/upload"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /blobs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Blobs"
					],
					"operation": [
						"Get Blobs"
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
						"Blobs"
					],
					"operation": [
						"Get Blobs"
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
						"Blobs"
					],
					"operation": [
						"Get Blobs"
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
						"Blobs"
					],
					"operation": [
						"Get Blobs"
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
						"Blobs"
					],
					"operation": [
						"Get Blobs"
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
						"Blobs"
					],
					"operation": [
						"Get Blobs"
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
						"Blobs"
					],
					"operation": [
						"Get Blobs"
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
						"Blobs"
					],
					"operation": [
						"Get Blobs"
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
						"Blobs"
					],
					"operation": [
						"Get Blobs"
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
						"Blobs"
					],
					"operation": [
						"Get Blobs"
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
						"Blobs"
					],
					"operation": [
						"Get Blobs"
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
						"Blobs"
					],
					"operation": [
						"Get Blobs"
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
						"Blobs"
					],
					"operation": [
						"Get Blobs"
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
						"Blobs"
					],
					"operation": [
						"Get Blobs"
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
						"Blobs"
					],
					"operation": [
						"Get Blobs"
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
						"Blobs"
					],
					"operation": [
						"Get Blobs"
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
						"Blobs"
					],
					"operation": [
						"Get Blobs"
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
						"Blobs"
					],
					"operation": [
						"Get Blobs"
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
						"Blobs"
					],
					"operation": [
						"Get Blobs"
					]
				}
			}
		},
		{
			"displayName": "Hash",
			"name": "hash",
			"description": "Filter based on the hash of the blob.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "hash",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Blobs"
					],
					"operation": [
						"Get Blobs"
					]
				}
			}
		},
		{
			"displayName": "Blob Key",
			"name": "blob_key",
			"description": "Filter based on the unique blob_key",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "blob_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Blobs"
					],
					"operation": [
						"Get Blobs"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "content_type",
			"description": "Filter based on the content type of the blob.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Blobs"
					],
					"operation": [
						"Get Blobs"
					]
				}
			}
		},
		{
			"displayName": "Filename",
			"name": "filename",
			"description": "Filter based on the filename of the blob.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filename",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Blobs"
					],
					"operation": [
						"Get Blobs"
					]
				}
			}
		},
		{
			"displayName": "Time Last Accessed",
			"name": "time_last_accessed",
			"description": "Filter based on the last time the blob was accessed",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "time_last_accessed",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Blobs"
					],
					"operation": [
						"Get Blobs"
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
						"Blobs"
					],
					"operation": [
						"Get Blobs"
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
						"Blobs"
					],
					"operation": [
						"Get Blobs"
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
						"Blobs"
					],
					"operation": [
						"Get Blobs"
					]
				}
			}
		},
		{
			"displayName": "POST /blobs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Blobs"
					],
					"operation": [
						"Add Blob"
					]
				}
			}
		},
		{
			"displayName": "Blob Key",
			"name": "blob_key",
			"type": "string",
			"default": "foobar",
			"description": "Unique key to the blob",
			"routing": {
				"send": {
					"property": "blob_key",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Blobs"
					],
					"operation": [
						"Add Blob"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "content_type",
			"type": "string",
			"default": "image/png",
			"description": "Media type of the resource. Automatically detected when not given in a POST.",
			"routing": {
				"send": {
					"property": "content_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Blobs"
					],
					"operation": [
						"Add Blob"
					]
				}
			}
		},
		{
			"displayName": "Download URL",
			"name": "download_url",
			"type": "string",
			"default": "https://brain.intellifi.nl/api/foobar",
			"description": "Url to the individual resource.",
			"routing": {
				"send": {
					"property": "download_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Blobs"
					],
					"operation": [
						"Add Blob"
					]
				}
			}
		},
		{
			"displayName": "Filename",
			"name": "filename",
			"type": "string",
			"default": "Foo bar",
			"description": "Filename of the blob",
			"routing": {
				"send": {
					"property": "filename",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Blobs"
					],
					"operation": [
						"Add Blob"
					]
				}
			}
		},
		{
			"displayName": "Hash",
			"name": "hash",
			"type": "string",
			"default": "50df961c6c099f778fa50647572ef21f4ef416d52f7e00e311d7dbca1a735f6a",
			"description": "Hash of the blob",
			"routing": {
				"send": {
					"property": "hash",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Blobs"
					],
					"operation": [
						"Add Blob"
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
						"Blobs"
					],
					"operation": [
						"Add Blob"
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
						"Blobs"
					],
					"operation": [
						"Add Blob"
					]
				}
			}
		},
		{
			"displayName": "Time Last Accessed",
			"name": "time_last_accessed",
			"type": "string",
			"default": "2018-08-30T09:51:59.737Z",
			"description": "[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was last accessed.",
			"routing": {
				"send": {
					"property": "time_last_accessed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Blobs"
					],
					"operation": [
						"Add Blob"
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
						"Blobs"
					],
					"operation": [
						"Add Blob"
					]
				}
			}
		},
		{
			"displayName": "Upload URL",
			"name": "upload_url",
			"type": "string",
			"default": "https://brain.intellifi.nl/api/foobar",
			"description": "Url to the individual resource.",
			"routing": {
				"send": {
					"property": "upload_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Blobs"
					],
					"operation": [
						"Add Blob"
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
						"Blobs"
					],
					"operation": [
						"Add Blob"
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
						"Blobs"
					],
					"operation": [
						"Add Blob"
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
						"Blobs"
					],
					"operation": [
						"Add Blob"
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
						"Blobs"
					],
					"operation": [
						"Add Blob"
					]
				}
			}
		},
		{
			"displayName": "DELETE /blobs/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Blobs"
					],
					"operation": [
						"Delete Blob"
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
						"Blobs"
					],
					"operation": [
						"Delete Blob"
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
						"Blobs"
					],
					"operation": [
						"Delete Blob"
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
						"Blobs"
					],
					"operation": [
						"Delete Blob"
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
						"Blobs"
					],
					"operation": [
						"Delete Blob"
					]
				}
			}
		},
		{
			"displayName": "GET /blobs/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Blobs"
					],
					"operation": [
						"Get Blob Metadata By ID"
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
						"Blobs"
					],
					"operation": [
						"Get Blob Metadata By ID"
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
						"Blobs"
					],
					"operation": [
						"Get Blob Metadata By ID"
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
						"Blobs"
					],
					"operation": [
						"Get Blob Metadata By ID"
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
						"Blobs"
					],
					"operation": [
						"Get Blob Metadata By ID"
					]
				}
			}
		},
		{
			"displayName": "GET /blobs/{id}/download/{filename}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Blobs"
					],
					"operation": [
						"Get Blob By ID"
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
						"Blobs"
					],
					"operation": [
						"Get Blob By ID"
					]
				}
			}
		},
		{
			"displayName": "Filename",
			"name": "filename",
			"required": true,
			"description": "Filename of the blob.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Blobs"
					],
					"operation": [
						"Get Blob By ID"
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
						"Blobs"
					],
					"operation": [
						"Get Blob By ID"
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
						"Blobs"
					],
					"operation": [
						"Get Blob By ID"
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
						"Blobs"
					],
					"operation": [
						"Get Blob By ID"
					]
				}
			}
		},
		{
			"displayName": "POST /blobs/{id}/upload",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Blobs"
					],
					"operation": [
						"Upload Blob By ID"
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
						"Blobs"
					],
					"operation": [
						"Upload Blob By ID"
					]
				}
			}
		},
		{
			"displayName": "POST /blobs/{id}/upload<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Blobs"
					],
					"operation": [
						"Upload Blob By ID"
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
						"Blobs"
					],
					"operation": [
						"Upload Blob By ID"
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
						"Blobs"
					],
					"operation": [
						"Upload Blob By ID"
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
						"Blobs"
					],
					"operation": [
						"Upload Blob By ID"
					]
				}
			}
		},
];
