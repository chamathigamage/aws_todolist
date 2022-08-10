variable "AccessKey" {
  type = string
}
variable "SecurityKey" {
  type = string
}
provider "aws" {

  access_key = var.AccessKey

  secret_key = var.SecurityKey

  region     = "ap-southeast-2"
}

