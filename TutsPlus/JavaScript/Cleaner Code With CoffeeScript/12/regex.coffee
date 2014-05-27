
emails = ['andrew@example.com', 'joe@plumber', 'joe.567@gmail.com', 'lucy+newsletter@stratford.co.uk', 'andrew']

emailRegex = ///
    ([\w\.+-]+)    # unique name
    @               # at-sign
    (\w+)           # domain name
    (\.\w+[\w\.]*)  # tld
///

for email in emails
    match = email.match emailRegex
    console.log match

    if match?
        console.log "#{email} matched"
    else
        console.log "#{email} did't match"
