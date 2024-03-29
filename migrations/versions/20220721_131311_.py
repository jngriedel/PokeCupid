"""empty message

Revision ID: d6a2bc2175e1
Revises: ffdc0a98111c
Create Date: 2022-07-21 13:13:11.415659

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd6a2bc2175e1'
down_revision = 'ffdc0a98111c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('name', sa.String(length=50), nullable=False))
    op.add_column('users', sa.Column('gender', sa.String(length=10), nullable=False))
    op.add_column('users', sa.Column('bio', sa.String(length=2000), nullable=False))
    op.add_column('users', sa.Column('hashedPassword', sa.String(length=255), nullable=False))
    op.add_column('users', sa.Column('pokemonId', sa.Integer(), nullable=False))
    op.add_column('users', sa.Column('createdAt', sa.DateTime(), nullable=False))
    op.drop_constraint('users_username_key', 'users', type_='unique')
    op.drop_column('users', 'hashed_password')
    op.drop_column('users', 'username')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('username', sa.VARCHAR(length=40), autoincrement=False, nullable=False))
    op.add_column('users', sa.Column('hashed_password', sa.VARCHAR(length=255), autoincrement=False, nullable=False))
    op.create_unique_constraint('users_username_key', 'users', ['username'])
    op.drop_column('users', 'createdAt')
    op.drop_column('users', 'pokemonId')
    op.drop_column('users', 'hashedPassword')
    op.drop_column('users', 'bio')
    op.drop_column('users', 'gender')
    op.drop_column('users', 'name')
    # ### end Alembic commands ###
