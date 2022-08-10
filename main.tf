resource "aws_s3_bucket" "b1" {

  bucket = "slightly-different-s3-terraform-bucket-cham"

    acl    = "public-read"

  tags = {

    Name        = "My bucket"

    Environment = "Dev"

  }
  

}

resource "aws_s3_bucket_object" "object1" {
for_each = fileset("./build/", "*")
bucket = aws_s3_bucket.b1.id
key = each.value
source = "./build/${each.value}"
content_type = (each.value == "index.html")? "text/html" : null
etag = filemd5("./build/${each.value}")
}

resource "aws_s3_bucket_policy" "prod_website" {  
  bucket = aws_s3_bucket.b1.id   
policy = <<POLICY
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::slightly-different-s3-terraform-bucket-cham/*"
        }
    ]
}
POLICY
}
resource "aws_s3_bucket_object" "static" {
    for_each = fileset("./build/static/js/", "*")
    bucket = aws_s3_bucket.b1.id   
    acl    = "public-read"
    key    = "static/js/${each.value}"
    source = "./build/static/js/${each.value}"
}