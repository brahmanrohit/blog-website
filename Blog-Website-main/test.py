import hashlib


def hash_password( password):
        return hashlib.sha256(password.encode()).hexdigest()


print(hash_password("admin_password"))
# 6d4525c2a21f9be1cca9e41f3aa402e0765ee5fcc3e7fea34a169b1730ae386e