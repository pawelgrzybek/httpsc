"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data = {
    classes: [
        {
            code: 1,
            shortDescription: "(Informational): The request was received, continuing process",
            description: "An informational response indicates that the request was received and understood. It is issued on a provisional basis while request processing continues. It alerts the client to wait for a final response. The message consists only of the status line and optional header fields, and is terminated by an empty line. As the HTTP/1.0 standard did not define any 1xx status codes, servers must not send a 1xx response to an HTTP/1.0 compliant client except under experimental conditions."
        },
        {
            code: 2,
            shortDescription: "(Successful): The request was successfully received, understood, and accepted",
            description: "This class of status codes indicates the action requested by the client was received, understood and accepted."
        },
        {
            code: 3,
            shortDescription: "(Redirection): Further action needs to be taken in order to complete the request",
            description: "This class of status code indicates the client must take additional action to complete the request. Many of these status codes are used in URL redirection. A user agent may carry out the additional action with no user interaction only if the method used in the second request is GET or HEAD. A user agent may automatically redirect a request. A user agent should detect and intervene to prevent cyclical redirects."
        },
        {
            code: 4,
            shortDescription: "(Client Error): The request contains bad syntax or cannot be fulfilled",
            description: "This class of status code is intended for situations in which the error seems to have been caused by the client. Except when responding to a HEAD request, the server should include an entity containing an explanation of the error situation, and whether it is a temporary or permanent condition. These status codes are applicable to any request method. User agents should display any included entity to the user."
        },
        {
            code: 5,
            shortDescription: "(Server Error): The server failed to fulfill an apparently valid request",
            description: 'Response status codes beginning with the digit "5" indicate cases in which the server is aware that it has encountered an error or is otherwise incapable of performing the request. Except when responding to a HEAD request, the server should include an entity containing an explanation of the error situation, and indicate whether it is a temporary or permanent condition. Likewise, user agents should display any included entity to the user. These response codes are applicable to any request method.'
        }
    ],
    statuscodes: [
        {
            code: 100,
            shortDescription: "Continue",
            description: "The client SHOULD continue with its request. This interim response is used to inform the client that the initial part of the request has been received and has not yet been rejected by the server. The client SHOULD continue by sending the remainder of the request or, if the request has already been completed, ignore this response. The server MUST send a final response after the request has been completed. See section 8.2.3 for detailed discussion of the use and handling of this status code."
        },
        {
            code: 101,
            shortDescription: "Switching Protocols",
            description: "The server understands and is willing to comply with the client's request, via the Upgrade message header field (section 14.42), for a change in the application protocol being used on this connection. The server will switch protocols to those defined by the response's Upgrade header field immediately after the empty line which terminates the 101 response. The protocol SHOULD be switched only when it is advantageous to do so. For example, switching to a newer version of HTTP is advantageous over older versions, and switching to a real-time, synchronous protocol might be advantageous when delivering resources that use such features."
        },
        {
            code: 102,
            shortDescription: "Processing (WebDAV)",
            description: "The 102 (Processing) status code is an interim response used to inform the client that the server has accepted the complete request, but has not yet completed it. This status code SHOULD only be sent when the server has a reasonable expectation that the request will take significant time to complete. As guidance, if a method is taking longer than 20 seconds (a reasonable, but arbitrary value) to process the server SHOULD return a 102 (Processing) response. The server MUST send a final response after the request has been completed. Methods can potentially take a long period of time to process, especially methods that support the Depth header. In such cases the client may time-out the connection while waiting for a response. To prevent this the server may return a 102 (Processing) status code to indicate to the client that the server is still processing the method."
        },
        {
            code: 200,
            shortDescription: "OK",
            description: "Standard response for successful HTTP requests. The actual response will depend on the request method used. In a GET request, the response will contain an entity corresponding to the requested resource. In a POST request, the response will contain an entity describing or containing the result of the action."
        },
        {
            code: 201,
            shortDescription: "Created",
            description: "The request has been fulfilled, resulting in the creation of a new resource."
        },
        {
            code: 202,
            shortDescription: "Accepted",
            description: "The request has been accepted for processing, but the processing has not been completed. The request might or might not be eventually acted upon, and may be disallowed when processing occurs."
        },
        {
            code: 203,
            shortDescription: "Non-Authoritative Information",
            description: "The server is a transforming proxy (e.g. a Web accelerator) that received a 200 OK from its origin, but is returning a modified version of the origin's response."
        },
        {
            code: 204,
            shortDescription: "No Content",
            description: "The server successfully processed the request and is not returning any content."
        },
        {
            code: 205,
            shortDescription: "Reset Content",
            description: "The server successfully processed the request, but is not returning any content. Unlike a 204 response, this response requires that the requester reset the document view."
        },
        {
            code: 206,
            shortDescription: "Partial Content",
            description: "The server is delivering only part of the resource (byte serving) due to a range header sent by the client. The range header is used by HTTP clients to enable resuming of interrupted downloads, or split a download into multiple simultaneous streams."
        },
        {
            code: 207,
            shortDescription: "Multi-Status (WebDAV)",
            description: "The message body that follows is by default an XML message and can contain a number of separate response codes, depending on how many sub-requests were made."
        },
        {
            code: 208,
            shortDescription: "Already Reported (WebDAV)",
            description: "The members of a DAV binding have already been enumerated in a preceding part of the (multistatus) response, and are not being included again."
        },
        {
            code: 226,
            shortDescription: "IM Used",
            description: "The server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance."
        },
        {
            code: 300,
            shortDescription: "Multiple Choices",
            description: "Indicates multiple options for the resource from which the client may choose (via agent-driven content negotiation). For example, this code could be used to present multiple video format options, to list files with different filename extensions, or to suggest word-sense disambiguation."
        },
        {
            code: 301,
            shortDescription: "Moved Permanently",
            description: "This and all future requests should be directed to the given URI."
        },
        {
            code: 302,
            shortDescription: "Found",
            description: 'Tells the client to look at (browse to) another URL. 302 has been superseded by 303 and 307. This is an example of industry practice contradicting the standard. The HTTP/1.0 specification (RFC 1945) required the client to perform a temporary redirect (the original describing phrase was "Moved Temporarily"),'
        },
        {
            code: 303,
            shortDescription: "See Other",
            description: "The response to the request can be found under another URI using the GET method. When received in response to a POST (or PUT/DELETE), the client should presume that the server has received the data and should issue a new GET request to the given URI."
        },
        {
            code: 304,
            shortDescription: "Not Modified",
            description: "Indicates that the resource has not been modified since the version specified by the request headers If-Modified-Since or If-None-Match. In such case, there is no need to retransmit the resource since the client still has a previously-downloaded copy."
        },
        {
            code: 305,
            shortDescription: "Use Proxy",
            description: "The requested resource is available only through a proxy, the address for which is provided in the response. Many HTTP clients (such as Mozilla Firefox and Internet Explorer) do not correctly handle responses with this status code, primarily for security reasons."
        },
        {
            code: 306,
            shortDescription: "(Unused)",
            description: 'No longer used. Originally meant "Subsequent requests should use the specified proxy."'
        },
        {
            code: 307,
            shortDescription: "Temporary Redirect",
            description: "In this case, the request should be repeated with another URI; however, future requests should still use the original URI. In contrast to how 302 was historically implemented, the request method is not allowed to be changed when reissuing the original request. For example, a POST request should be repeated using another POST request."
        },
        {
            code: 308,
            shortDescription: "Permanent Redirect (experimental)",
            description: "The request and all future requests should be repeated using another URI. 307 and 308 parallel the behaviors of 302 and 301, but do not allow the HTTP method to change. So, for example, submitting a form to a permanently redirected resource may continue smoothly."
        },
        {
            code: 400,
            shortDescription: "Bad Request",
            description: "The server cannot or will not process the request due to an apparent client error (e.g., malformed request syntax, size too large, invalid request message framing, or deceptive request routing)."
        },
        {
            code: 401,
            shortDescription: "Unauthorized",
            description: 'Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided. The response must include a WWW-Authenticate header field containing a challenge applicable to the requested resource. See Basic access authentication and Digest access authentication. 401 semantically means "unauthenticated", i.e. the user does not have the necessary credentials. Note: Some sites incorrectly issue HTTP 401 when an IP address is banned from the website (usually the website domain) and that specific address is refused permission to access a website.'
        },
        {
            code: 402,
            shortDescription: "Payment Required",
            description: "Reserved for future use. The original intention was that this code might be used as part of some form of digital cash or micropayment scheme, as proposed for example by GNU Taler, but that has not yet happened, and this code is not usually used. Google Developers API uses this status if a particular developer has exceeded the daily limit on requests. Sipgate uses this code if an account does not have sufficient funds to start a call. Shopify uses this code when the store has not paid their fees and is temporarily disabled."
        },
        {
            code: 403,
            shortDescription: "Forbidden",
            description: "The request was valid, but the server is refusing action. The user might not have the necessary permissions for a resource, or may need an account of some sort."
        },
        {
            code: 404,
            shortDescription: "Not Found",
            description: "The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible."
        },
        {
            code: 405,
            shortDescription: "Method Not Allowed",
            description: "A request method is not supported for the requested resource; for example, a GET request on a form that requires data to be presented via POST, or a PUT request on a read-only resource."
        },
        {
            code: 406,
            shortDescription: "Not Acceptable",
            description: "The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request. See Content negotiation."
        },
        {
            code: 407,
            shortDescription: "Proxy Authentication Required",
            description: "The client must first authenticate itself with the proxy."
        },
        {
            code: 408,
            shortDescription: "Request Timeout",
            description: 'The server timed out waiting for the request. According to HTTP specifications: "The client did not produce a request within the time that the server was prepared to wait. The client MAY repeat the request without modifications at any later time."'
        },
        {
            code: 409,
            shortDescription: "Conflict",
            description: "Indicates that the request could not be processed because of conflict in the current state of the resource, such as an edit conflict between multiple simultaneous updates."
        },
        {
            code: 410,
            shortDescription: "Gone",
            description: 'Indicates that the resource requested is no longer available and will not be available again. This should be used when a resource has been intentionally removed and the resource should be purged. Upon receiving a 410 status code, the client should not request the resource in the future. Clients such as search engines should remove the resource from their indices. Most use cases do not require clients and search engines to purge the resource, and a "404 Not Found" may be used instead.'
        },
        {
            code: 411,
            shortDescription: "Length Required",
            description: "The request did not specify the length of its content, which is required by the requested resource."
        },
        {
            code: 412,
            shortDescription: "Precondition Failed",
            description: "The server does not meet one of the preconditions that the requester put on the request."
        },
        {
            code: 413,
            shortDescription: "Request Entity Too Large",
            description: 'The request is larger than the server is willing or able to process. Previously called "Request Entity Too Large".'
        },
        {
            code: 414,
            shortDescription: "Request-URI Too Long",
            description: 'The URI provided was too long for the server to process. Often the result of too much data being encoded as a query-string of a GET request, in which case it should be converted to a POST request. Called "Request-URI Too Long" previously.'
        },
        {
            code: 415,
            shortDescription: "Unsupported Media Type",
            description: "The request entity has a media type which the server or resource does not support. For example, the client uploads an image as image/svg+xml, but the server requires that images use a different format."
        },
        {
            code: 416,
            shortDescription: "Requested Range Not Satisfiable",
            description: 'The client has asked for a portion of the file (byte serving), but the server cannot supply that portion. For example, if the client asked for a part of the file that lies beyond the end of the file. Called "Requested Range Not Satisfiable" previously.'
        },
        {
            code: 417,
            shortDescription: "Expectation Failed",
            description: "The server cannot meet the requirements of the Expect request-header field."
        },
        {
            code: 418,
            shortDescription: "I'm a teapot (RFC 2324)",
            description: "This code was defined in 1998 as one of the traditional IETF April Fools' jokes, in RFC 2324, Hyper Text Coffee Pot Control Protocol, and is not expected to be implemented by actual HTTP servers. The RFC specifies this code should be returned by teapots requested to brew coffee. This HTTP status is used as an Easter egg in some websites, including Google.com."
        },
        {
            code: 420,
            shortDescription: "Enhance Your Calm (Twitter)",
            description: ""
        },
        {
            code: 421,
            shortDescription: "Misdirected Request (RFC 7540)",
            description: "The request was directed at a server that is not able to produce a response (for example because of connection reuse)."
        },
        {
            code: 422,
            shortDescription: "Unprocessable Entity (WebDAV)",
            description: "The request was well-formed but was unable to be followed due to semantic errors."
        },
        {
            code: 423,
            shortDescription: "Locked (WebDAV)",
            description: "The resource that is being accessed is locked."
        },
        {
            code: 424,
            shortDescription: "Failed Dependency (WebDAV)",
            description: "The request failed because it depended on another request and that request failed (e.g., a PROPPATCH)."
        },
        {
            code: 425,
            shortDescription: "Reserved for WebDAV",
            description: 'Slein, J., Whitehead, E.J., et al., "WebDAV Advanced Collections Protocol", Work In Progress.'
        },
        {
            code: 426,
            shortDescription: "Upgrade Required",
            description: "The client should switch to a different protocol such as TLS/1.0, given in the Upgrade header field."
        },
        {
            code: 428,
            shortDescription: "Precondition Required",
            description: "The origin server requires the request to be conditional. Intended to prevent the 'lost update' problem, where a client GETs a resource's state, modifies it, and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict."
        },
        {
            code: 429,
            shortDescription: "Too Many Requests",
            description: "The user has sent too many requests in a given amount of time. Intended for use with rate-limiting schemes."
        },
        {
            code: 431,
            shortDescription: "Request Header Fields Too Large",
            description: "The server is unwilling to process the request because either an individual header field, or all the header fields collectively, are too large."
        },
        {
            code: 444,
            shortDescription: "No Response (Nginx)",
            description: "An Nginx HTTP server extension. The server returns no information to the client and closes the connection (useful as a deterrent for malware)."
        },
        {
            code: 449,
            shortDescription: "Retry With (Microsoft)",
            description: "A Microsoft extension. The request should be retried after performing the appropriate action."
        },
        {
            code: 499,
            shortDescription: "Client Closed Request (Nginx)",
            description: "An Nginx HTTP server extension. This code is introduced to log the case when the connection is closed by client while HTTP server is processing its request, making server unable to send the HTTP header back."
        },
        {
            code: 450,
            shortDescription: "Blocked by Windows Parental Controls (Microsoft)",
            description: "A Microsoft extension. This error is given when Windows Parental Controls are turned on and are blocking access to the given webpage."
        },
        {
            code: 451,
            shortDescription: "Unavailable For Legal Reasons",
            description: "A server operator has received a legal demand to deny access to a resource or to a set of resources that includes the requested resource. The code 451 was chosen as a reference to the novel Fahrenheit 451 (see the Acknowledgements in the RFC)."
        },
        {
            code: 500,
            shortDescription: "Internal Server Error",
            description: "The server encountered an unexpected condition which prevented it from fulfilling the request."
        },
        {
            code: 501,
            shortDescription: "Not Implemented",
            description: "The server does not support the functionality required to fulfill the request. This is the appropriate response when the server does not recognize the request method and is not capable of supporting it for any resource."
        },
        {
            code: 502,
            shortDescription: "Bad Gateway",
            description: "The server, while acting as a gateway or proxy, received an invalid response from the upstream server it accessed in attempting to fulfill the request."
        },
        {
            code: 503,
            shortDescription: "Service Unavailable",
            description: "The server is currently unable to handle the request due to a temporary overloading or maintenance of the server. The implication is that this is a temporary condition which will be alleviated after some delay. If known, the length of the delay MAY be indicated in a Retry-After header. If no Retry-After is given, the client SHOULD handle the response as it would for a 500 response."
        },
        {
            code: 504,
            shortDescription: "Gateway Timeout",
            description: "The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server specified by the URI (e.g. HTTP, FTP, LDAP) or some other auxiliary server (e.g. DNS) it needed to access in attempting to complete the request."
        },
        {
            code: 505,
            shortDescription: "HTTP Version Not Supported",
            description: "The server does not support, or refuses to support, the HTTP protocol version that was used in the request message. The server is indicating that it is unable or unwilling to complete the request using the same major version as the client, as described in section 3.1, other than with this error message. The response SHOULD contain an entity describing why that version is not supported and what other protocols are supported by that server."
        },
        {
            code: 506,
            shortDescription: "Variant Also Negotiates (Experimental)",
            description: "The 506 status code indicates that the server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process."
        },
        {
            code: 507,
            shortDescription: "Insufficient Storage (WebDAV)",
            description: "The 507 (Insufficient Storage) status code means the method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request. This condition is considered to be temporary. If the request that received this status code was the result of a user action, the request MUST NOT be repeated until it is requested by a separate user action."
        },
        {
            code: 508,
            shortDescription: "Loop Detected (WebDAV)",
            description: 'The 508 (Loop Detected) status code indicates that the server terminated an operation because it encountered an infinite loop while processing a request with "Depth: infinity". This status indicates that the entire operation failed.'
        },
        {
            code: 509,
            shortDescription: "Bandwidth Limit Exceeded (Apache)",
            description: "This status code, while used by many servers, is not specified in any RFCs."
        },
        {
            code: 510,
            shortDescription: "Not Extended",
            description: "The policy for accessing the resource has not been met in the request. The server should send back all the information necessary for the client to issue an extended request. It is outside the scope of this specification to specify how the extensions inform the client. If the 510 response contains information about extensions that were not present in the initial request then the client MAY repeat the request if it has reason to believe it can fulfill the extension policy by modifying the request according to the information provided in the 510 response. Otherwise the client MAY present any entity included in the 510 response to the user, since that entity may include relevant diagnostic information."
        },
        {
            code: 511,
            shortDescription: "Network Authentication Required",
            description: "The 511 status code indicates that the client needs to authenticate to gain network access."
        },
        {
            code: 598,
            shortDescription: "Network read timeout error",
            description: "This status code is not specified in any RFCs, but is used by some HTTP proxies to signal a network read timeout behind the proxy to a client in front of the proxy."
        },
        {
            code: 599,
            shortDescription: "Network connect timeout error",
            description: "This status code is not specified in any RFCs, but is used by some HTTP proxies to signal a network connect timeout behind the proxy to a client in front of the proxy."
        }
    ]
};
exports.default = data;
