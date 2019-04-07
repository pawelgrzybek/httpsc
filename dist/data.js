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
            description: "The server has received the request headers and the client should proceed to send the request body (in the case of a request for which a body needs to be sent; for example, a POST request). Sending a large request body to a server after a request has been rejected for inappropriate headers would be inefficient. To have a server check the request's headers, a client must send Expect: 100-continue as a header in its initial request and receive a 100 Continue status code in response before sending the body. If the client receives an error code such as 403 (Forbidden) or 405 (Method Not Allowed) then it shouldn't send the request's body. The response 417 Expectation Failed indicates that the request should be repeated without the Expect header as it indicates that the server doesn't support expectations (this is the case, for example, of HTTP/1.0 servers)."
        },
        {
            code: 101,
            shortDescription: "Switching Protocols",
            description: "The requester has asked the server to switch protocols and the server has agreed to do so."
        },
        {
            code: 102,
            shortDescription: "Processing (WebDAV)",
            description: "A WebDAV request may contain many sub-requests involving file operations, requiring a long time to complete the request. This code indicates that the server has received and is processing the request, but no response is available yet.[7] This prevents the client from timing out and assuming the request was lost."
        },
        {
            code: 103,
            shortDescription: "Early Hints (RFC 8297)",
            description: "Used to return some response headers before final HTTP message."
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
            shortDescription: "Non-Authoritative Information (since HTTP/1.1)",
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
            shortDescription: "Partial Content (RFC 7233)",
            description: "The server is delivering only part of the resource (byte serving) due to a range header sent by the client. The range header is used by HTTP clients to enable resuming of interrupted downloads, or split a download into multiple simultaneous streams."
        },
        {
            code: 207,
            shortDescription: "Multi-Status (WebDAV; RFC 4918)",
            description: "The message body that follows is by default an XML message and can contain a number of separate response codes, depending on how many sub-requests were made."
        },
        {
            code: 208,
            shortDescription: "Already Reported (WebDAV; RFC 5842)",
            description: "The members of a DAV binding have already been enumerated in a preceding part of the (multistatus) response, and are not being included again."
        },
        {
            code: 226,
            shortDescription: "IM Used (RFC 3229)",
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
            shortDescription: 'Found (Previously "Moved temporarily")',
            description: 'Tells the client to look at (browse to) another URL. 302 has been superseded by 303 and 307. This is an example of industry practice contradicting the standard. The HTTP/1.0 specification (RFC 1945) required the client to perform a temporary redirect (the original describing phrase was "Moved Temporarily"),but popular browsers implemented 302 with the functionality of a 303 See Other. Therefore, HTTP/1.1 added status codes 303 and 307 to distinguish between the two behaviors. However, some Web applications and frameworks use the 302 status code as if it were the 303.'
        },
        {
            code: 303,
            shortDescription: "See Other (since HTTP/1.1)",
            description: "The response to the request can be found under another URI using the GET method. When received in response to a POST (or PUT/DELETE), the client should presume that the server has received the data and should issue a new GET request to the given URI."
        },
        {
            code: 304,
            shortDescription: "Not Modified (RFC 7232)",
            description: "Indicates that the resource has not been modified since the version specified by the request headers If-Modified-Since or If-None-Match. In such case, there is no need to retransmit the resource since the client still has a previously-downloaded copy."
        },
        {
            code: 305,
            shortDescription: "Use Proxy (since HTTP/1.1)",
            description: "The requested resource is available only through a proxy, the address for which is provided in the response. Many HTTP clients (such as Mozilla Firefox and Internet Explorer) do not correctly handle responses with this status code, primarily for security reasons."
        },
        {
            code: 306,
            shortDescription: "Switch Proxy",
            description: 'No longer used. Originally meant "Subsequent requests should use the specified proxy."'
        },
        {
            code: 307,
            shortDescription: "Temporary Redirect (since HTTP/1.1)",
            description: "In this case, the request should be repeated with another URI; however, future requests should still use the original URI. In contrast to how 302 was historically implemented, the request method is not allowed to be changed when reissuing the original request. For example, a POST request should be repeated using another POST request."
        },
        {
            code: 308,
            shortDescription: "Permanent Redirect (RFC 7538)",
            description: "The request and all future requests should be repeated using another URI. 307 and 308 parallel the behaviors of 302 and 301, but do not allow the HTTP method to change. So, for example, submitting a form to a permanently redirected resource may continue smoothly."
        },
        {
            code: 400,
            shortDescription: "Bad Request",
            description: "The server cannot or will not process the request due to an apparent client error (e.g., malformed request syntax, size too large, invalid request message framing, or deceptive request routing)."
        },
        {
            code: 401,
            shortDescription: "Unauthorized (RFC 7235)",
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
            shortDescription: "Proxy Authentication Required (RFC 7235)",
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
            shortDescription: "Precondition Failed (RFC 7232)",
            description: "The server does not meet one of the preconditions that the requester put on the request."
        },
        {
            code: 413,
            shortDescription: "Payload Too Large (RFC 7231)",
            description: 'The request is larger than the server is willing or able to process. Previously called "Request Entity Too Large".'
        },
        {
            code: 414,
            shortDescription: "URI Too Long (RFC 7231)",
            description: 'The URI provided was too long for the server to process. Often the result of too much data being encoded as a query-string of a GET request, in which case it should be converted to a POST request. Called "Request-URI Too Long" previously.'
        },
        {
            code: 415,
            shortDescription: "Unsupported Media Type",
            description: "The request entity has a media type which the server or resource does not support. For example, the client uploads an image as image/svg+xml, but the server requires that images use a different format."
        },
        {
            code: 416,
            shortDescription: "Range Not Satisfiable (RFC 7233)",
            description: 'The client has asked for a portion of the file (byte serving), but the server cannot supply that portion. For example, if the client asked for a part of the file that lies beyond the end of the file. Called "Requested Range Not Satisfiable" previously.'
        },
        {
            code: 417,
            shortDescription: "Expectation Failed",
            description: "The server cannot meet the requirements of the Expect request-header field."
        },
        {
            code: 418,
            shortDescription: "I'm a teapot (RFC 2324, RFC 7168)",
            description: "This code was defined in 1998 as one of the traditional IETF April Fools' jokes, in RFC 2324, Hyper Text Coffee Pot Control Protocol, and is not expected to be implemented by actual HTTP servers. The RFC specifies this code should be returned by teapots requested to brew coffee. This HTTP status is used as an Easter egg in some websites, including Google.com."
        },
        {
            code: 421,
            shortDescription: "Misdirected Request (RFC 7540)",
            description: "The request was directed at a server that is not able to produce a response (for example because of connection reuse)."
        },
        {
            code: 422,
            shortDescription: "Unprocessable Entity (WebDAV; RFC 4918)",
            description: "The request was well-formed but was unable to be followed due to semantic errors."
        },
        {
            code: 423,
            shortDescription: "Locked (WebDAV; RFC 4918)",
            description: "The resource that is being accessed is locked."
        },
        {
            code: 424,
            shortDescription: "Failed Dependency (WebDAV; RFC 4918)",
            description: "The request failed because it depended on another request and that request failed (e.g., a PROPPATCH)."
        },
        {
            code: 426,
            shortDescription: "Upgrade Required",
            description: "The client should switch to a different protocol such as TLS/1.0, given in the Upgrade header field."
        },
        {
            code: 428,
            shortDescription: "Precondition Required (RFC 6585)",
            description: "The origin server requires the request to be conditional. Intended to prevent the 'lost update' problem, where a client GETs a resource's state, modifies it, and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict."
        },
        {
            code: 429,
            shortDescription: "Too Many Requests (RFC 6585)",
            description: "The user has sent too many requests in a given amount of time. Intended for use with rate-limiting schemes."
        },
        {
            code: 431,
            shortDescription: "Request Header Fields Too Large (RFC 6585)",
            description: "The server is unwilling to process the request because either an individual header field, or all the header fields collectively, are too large."
        },
        {
            code: 451,
            shortDescription: "Unavailable For Legal Reasons (RFC 7725)",
            description: "A server operator has received a legal demand to deny access to a resource or to a set of resources that includes the requested resource. The code 451 was chosen as a reference to the novel Fahrenheit 451 (see the Acknowledgements in the RFC)."
        },
        {
            code: 500,
            shortDescription: "Internal Server Error",
            description: "A generic error message, given when an unexpected condition was encountered and no more specific message is suitable."
        },
        {
            code: 501,
            shortDescription: "Not Implemented",
            description: "The server either does not recognize the request method, or it lacks the ability to fulfil the request. Usually this implies future availability (e.g., a new feature of a web-service API)."
        },
        {
            code: 502,
            shortDescription: "Bad Gateway",
            description: "The server was acting as a gateway or proxy and received an invalid response from the upstream server."
        },
        {
            code: 503,
            shortDescription: "Service Unavailable",
            description: "The server cannot handle the request (because it is overloaded or down for maintenance). Generally, this is a temporary state."
        },
        {
            code: 504,
            shortDescription: "Gateway Timeout",
            description: "The server was acting as a gateway or proxy and did not receive a timely response from the upstream server."
        },
        {
            code: 505,
            shortDescription: "HTTP Version Not Supported",
            description: "The server does not support the HTTP protocol version used in the request."
        },
        {
            code: 506,
            shortDescription: "Variant Also Negotiates (RFC 2295)",
            description: "Transparent content negotiation for the request results in a circular reference."
        },
        {
            code: 507,
            shortDescription: "Insufficient Storage (WebDAV; RFC 4918)",
            description: "The server is unable to store the representation needed to complete the request."
        },
        {
            code: 508,
            shortDescription: "Loop Detected (WebDAV; RFC 5842)",
            description: "The server detected an infinite loop while processing the request (sent instead of 208 Already Reported)."
        },
        {
            code: 510,
            shortDescription: "Not Extended (RFC 2774)",
            description: "Further extensions to the request are required for the server to fulfil it."
        },
        {
            code: 511,
            shortDescription: "Network Authentication Required (RFC 6585)",
            description: 'The client needs to authenticate to gain network access. Intended for use by intercepting proxies used to control access to the network (e.g., "captive portals" used to require agreement to Terms of Service before granting full Internet access via a Wi-Fi hotspot).'
        }
    ]
};
exports.default = data;
